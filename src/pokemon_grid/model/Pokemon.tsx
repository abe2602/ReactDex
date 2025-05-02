import { PokemonStat } from "./PokemonStat";
import PokemonType from "./PokemonType";

export class Pokemon {
  name: string;
  imageUrl: string;
  id: number;
  height: string;
  weight: string;
  baseExperience: string;
  types: PokemonType[];
  stats: PokemonStat[];

  constructor(
    id: number,
    pokemonName: string,
    imageUrl: string,
    height: string,
    weight: string,
    baseExperience: string,
    stats: PokemonStat[],
    types: PokemonType[]
  ) {
    this.name = pokemonName;
    this.id = id;
    this.imageUrl = imageUrl;
    this.types = types;
    this.height = height;
    this.weight = weight;
    this.baseExperience = baseExperience;
    this.stats = stats;
  }
}
