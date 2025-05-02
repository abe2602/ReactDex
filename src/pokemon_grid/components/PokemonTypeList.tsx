import PokemonType from "../model/PokemonType";

function PokemonTypeList({ types }: { types: PokemonType[] }) {
  return (
    <ul className="types-container">
      {types.map((item, index) => (
        <li
          key={index}
          style={{
            margin: "0 5px",
            backgroundColor: geTypeColor(item),
            padding: "6px",
            fontWeight: "bold",
            textTransform: "uppercase",
            borderRadius: "10%",
            fontSize: "small",
          }}
        >
          <div className="type-item-text">{item}</div>
        </li>
      ))}
    </ul>
  );
}

export default PokemonTypeList;

const geTypeColor = (type: PokemonType) => {
  switch (type) {
    case PokemonType.Normal:
      return "#A8A77A";
    case PokemonType.Fire:
      return "#EE8130";
    case PokemonType.Water:
      return "#6390F0";
    case PokemonType.Electric:
      return "#F7D02C";
    case PokemonType.Grass:
      return "#7AC74C";
    case PokemonType.Ice:
      return "#96D9D6";
    case PokemonType.Fighting:
      return "#C22E28";
    case PokemonType.Poison:
      return "#A33EA1";
    case PokemonType.Ground:
      return "#E2BF65";
    case PokemonType.Flying:
      return "#A98FF3";
    case PokemonType.Psychic:
      return "#F95587";
    case PokemonType.Bug:
      return "#A6B91A";
    case PokemonType.Rock:
      return "#B6A136";
    case PokemonType.Ghost:
      return "#735797";
    case PokemonType.Dragon:
      return "#6F35FC";
    case PokemonType.Dark:
      return "#705746";
    case PokemonType.Steel:
      return "#B7B7CE";
    case PokemonType.Fairy:
      return "#D685AD";
    default:
      return "#FFFFFF";
  }
};
