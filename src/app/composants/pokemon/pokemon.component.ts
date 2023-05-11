import {Component, Inject, Input, OnInit} from '@angular/core';
import {PokemonModels} from "../../models/PokemonModels";
import {Pokemons} from "../../models/Pokemons"
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonDetails} from "../../models/pokemonDetails";
import {ActivatedRoute} from "@angular/router";
import {ResponsePokemons} from "../../models/ResponsePokemons";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{

  @Input() public pokemon! : Pokemons;
  public data$! : Observable<PokemonDetails>
  public name: string = "";


  constructor(
    @Inject(HttpClient) private http : HttpClient,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    //this.data$ = this.http.get<PokemonDetails>(this.pokemon.url);
    //this.data$ = this.http.get<ResponsePokemons>('https://pokeapi.co/api/v2/pokemon/'+this.id);

    if(this.pokemon != undefined){
      this.data$ = this.http.get<PokemonDetails>(this.pokemon.url);
    }else{
      this.name = this.route.snapshot.paramMap.get('name')!;
      this.data$ = this.http.get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/' + this.name);
    }


  }
}
