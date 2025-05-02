import { Pokemon } from "../model/Pokemon";
import PokemonTypeList from "./PokemonTypeList";

type PokemonItemProps = {
  pokemon: Pokemon;
  selectPokemon: (pokemon: Pokemon) => void;
};

function PokemonItem({ pokemon, selectPokemon }: PokemonItemProps) {
  return (
    <div
      key={pokemon.id}
      className="pokemon-item"
      onClick={() => selectPokemon(pokemon)}
    >
      <img className="fitted-image" src={pokemon.imageUrl} />
      <div className="item-pokemon-number">Nº {pokemon.id}</div>
      <div className="item-pokemon-name">{pokemon.name}</div>
      <PokemonTypeList types={pokemon.types} />
    </div>
  );
}

export default PokemonItem;
