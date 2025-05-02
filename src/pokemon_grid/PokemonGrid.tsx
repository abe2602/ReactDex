import { useState, useEffect } from "react";
import { Pokemon } from "./model/Pokemon";
import PokemonType from "./model/PokemonType";
import PokemonStat from "./model/PokemonStat";

import SelectedPokemon from "./components/SelectedPokemon";
import PokemonItem from "./components/PokemonItem";

function PokemonGrid() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setPokemon] = useState(null);
  const [searchInput, setSeachInput] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((pokemonListResponse) => {
        return pokemonListResponse.json();
      })
      .then((pokemonListResponse) => {
        const pokemonUrlList = pokemonListResponse.results.map((result) => {
          return result.url;
        });

        Promise.all(
          pokemonUrlList.map((url: string) =>
            fetch(url).then((response) => {
              return response.json();
            })
          )
        ).then((detailsList) => {
          const pokemonList = detailsList.map((result) => {
            const typeList = result.types.map((types) => {
              return types.type.name;
            });

            const statsList = result.stats.map((stats) => {
              console.log(stats);
              return new PokemonStat(stats.stat.name, stats.base_stat);
            });

            return new Pokemon(
              result.id,
              result.name,
              result.sprites.front_default,
              result.height,
              result.weight,
              result.base_experience,
              statsList,
              stringToPokemonType(typeList)
            );
          });

          setPokemonList(pokemonList);
        });
      });
  }, []);

  function selectPokemon(pokemon: { pokemon: Pokemon }) {
    if (selectedPokemon != null) {
      if (pokemon.id == selectedPokemon.id) {
        setPokemon(null);
      } else {
        setPokemon(pokemon);
      }
    } else {
      setPokemon(pokemon);
    }
  }

  function searchPokemon(name: string) {
    setSeachInput(name);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search some pokemon"
        onChange={(text) => searchPokemon(text.target.value)}
      />
      <div className="app">
        <div className="grid-container">
          {pokemonList
            .filter(({ pokemon }: { pokemon: Pokemon }) => {
              if (searchInput != "") {
                return pokemon.name.includes(searchInput);
              } else {
                return true;
              }
            })
            .map((pokemon) => (
              <PokemonItem pokemon={pokemon} selectPokemon={selectPokemon} />
            ))}
        </div>
        {selectedPokemon ? (
          <SelectedPokemon pokemon={selectedPokemon} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PokemonGrid;

function stringToPokemonType(types: string[]): PokemonType[] {
  return types
    .map((type) =>
      (Object.values(PokemonType) as string[]).includes(type)
        ? (type as PokemonType)
        : undefined
    )
    .filter((type): type is PokemonType => type !== undefined);
}
