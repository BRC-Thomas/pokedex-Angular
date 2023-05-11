import {Component, Inject, Input, OnInit} from '@angular/core';
import {PokemonModels} from "../../models/PokemonModels";
import {Pokemons} from "../../models/Pokemons"
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonDetails} from "../../models/pokemonDetails";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{

  @Input() public pokemon! : Pokemons;
  public data$! : Observable<PokemonDetails>


  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.data$ = this.http.get<PokemonDetails>(this.pokemon.url)
  }
}
