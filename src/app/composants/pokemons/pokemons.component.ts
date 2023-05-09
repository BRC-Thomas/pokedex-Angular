import { Component } from '@angular/core';
import {PokemonModels} from "../../models/PokemonModels";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent {
  public pokemonArray : PokemonModels[] = [];

  constructor() {
    this.pokemonArray.push(new PokemonModels(1,"Bulbizarre",["graine"] , ["plante", "poison"], 70, 6.9));
    this.pokemonArray.push(new PokemonModels(2,"Herbizarre",["graine"], ["plante", "poison"], 100, 13));
    this.pokemonArray.push(new PokemonModels(3, "Florizarre",["graine"],["plante", "poison"], 200, 100));

    this.pokemonArray.push(new PokemonModels(4,"Salamèche", ["flamme"],["feu"] , 60, 8.5));
    this.pokemonArray.push(new PokemonModels(5,"Reptincel", ["flamme"],["feu"] , 110, 19));
    this.pokemonArray.push(new PokemonModels(6,"Dracaufeu", ["flamme"], ["feu"], 170, 90.5));
  }

}
