import PokemonStatName from "./PokemonStatName";
export class PokemonStat {
  name: PokemonStatName;
  statValue: string;

  constructor(name: string, statValue: string) {
    this.name = toPokemonStatValue(name);
    this.statValue = statValue;
  }
}

function toPokemonStatValue(statValue: string): PokemonStatName {
  switch (statValue) {
    case "Statshp":
      return PokemonStatName.HP;

    case "attack":
      return PokemonStatName.Attack;

    case "defense":
      return PokemonStatName.Defense;

    case "special-attack":
      return PokemonStatName.SpecialAttack;

    case "special-defense":
      return PokemonStatName.SpecialDefense;

    default:
      return PokemonStatName.HP;
  }
}

export default PokemonStat;
