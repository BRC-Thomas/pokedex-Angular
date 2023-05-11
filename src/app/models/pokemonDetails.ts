import {Typpes} from "./Typpes";
import {OfficialArtwork} from "./Official-artwork";
import {sprites} from "./sprites";

export interface PokemonDetails{

  order : number; // id
  name : string;
  weight : number;
  height : number;
  type : Typpes[];
  sprites : sprites;


  //category : string[];

}
