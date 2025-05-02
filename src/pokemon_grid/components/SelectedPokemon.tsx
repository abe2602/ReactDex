import { Pokemon } from "../model/Pokemon";
import PokemonTypeList from "./PokemonTypeList";

function SelectedPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="pokemon-details">
      <img className="pokemon-details-image" src={pokemon.imageUrl} />
      <div className="item-pokemon-number" style={topPadding}>
        Nº {pokemon.id}
      </div>
      <div className="item-pokemon-name">{pokemon.name}</div>
      <PokemonTypeList types={pokemon.types} />

      <ul className="attributes-container">
        <li>
          <AttibuteItem
            type="Height"
            attributeValue={parseFloat(pokemon.height) / 10 + "m"}
          />
        </li>
        <li>
          <AttibuteItem type="Weight" attributeValue={pokemon.weight + "Kg"} />
        </li>
        <li>
          <AttibuteItem
            type="Base XP"
            attributeValue={pokemon.baseExperience}
          />
        </li>
      </ul>
      <div className="stats-container">
        <div className="stats-title">Stats</div>
        <ul className="stats-list">
          {pokemon.stats.map((stat) => (
            <li key={stat.name} className="stat-item">
              <span className="stat-name">{stat.name}</span>
              <span className="stat-value">{stat.statValue}</span>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}

const topPadding = {
  paddingTop: "10px",
};

function AttibuteItem({
  type,
  attributeValue,
}: {
  type: string;
  attributeValue: string;
}) {
  return (
    <ul className="attributes-item-container">
      <li className="attributes-item-type">{type}</li>
      <li className="attributes-item-value">{attributeValue}</li>
    </ul>
  );
}

export default SelectedPokemon;
