import {Component, Input} from '@angular/core';
import {PokemonModels} from "../../models/PokemonModels";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() public name : string = "";
  @Input() public height : number | string = "";
  @Input() public weight : number | string = "";
  @Input() public category : string[] = [];
  @Input() public id : number = 0;
  @Input() public type : string[]  = [];
  @Input() public image : string  = "";

}
