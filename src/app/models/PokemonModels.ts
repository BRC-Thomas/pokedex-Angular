import {Typpes} from "./Typpes";
import {OfficialArtwork} from "./Official-artwork";
import {sprites} from "./sprites";

export interface PokemonModels{

  order : number; // id
  name : string;
  weight : number;
  height : number;
  type : Typpes[];
  image : sprites;

  //category : string[];






}
