import {Component, Inject, OnInit} from '@angular/core';
import {PokemonModels} from "../../models/PokemonModels";
import {Observable} from "rxjs";
import {ResponsePokemons} from "../../models/ResponsePokemons";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit{

  public pokemonArray$! : Observable<ResponsePokemons>;

  constructor(
    @Inject(HttpClient) private http : HttpClient
  ) {
  }

  public  ngOnInit():void {
    this.pokemonArray$ = this.http.get<ResponsePokemons>('https://pokeapi.co/api/v2/pokemon/');
  }
}
