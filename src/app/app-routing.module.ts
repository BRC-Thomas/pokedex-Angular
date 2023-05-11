import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonComponent} from "./composants/pokemon/pokemon.component";
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";


const routes: Routes = [
  {path: 'pokemon/:name', component: PokemonComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: '**', component: PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
