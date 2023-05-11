import {Pokemons} from "./Pokemons";

export interface ResponsePokemons{
  count: number;
  next: string;
  previous: string;
  results: Pokemons[];
}
