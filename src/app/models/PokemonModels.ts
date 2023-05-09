export class PokemonModels{


  private _id : number;
  private _name : string;
  private _category : string[];
  private _type : string[];
  private _height : number | string = "N/A";
  private _weight : number | string  = "N/A";

  constructor(id: number, name: string, category: string[], type: string[], height: number | string, weight: number | string) {
    this._id = id;
    this._name = name;
    this._category = category;
    this._type = type;
    this._height = height;
    this._weight = weight;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get category(): string[] {
    return this._category;
  }

  set category(value: string[]) {
    this._category = value;
  }

  get type(): string[] {
    return this._type;
  }

  set type(value: string[]) {
    this._type = value;
  }

  get height(): number | string {
    if(typeof this._height === "number"){
      return this._height / 100 ;
    } else {
      return this._height;
    }
  }

  set height(value: number | string) {
    this._height = value;
  }

  get weight(): number | string {
    return this._weight;
  }

  set weight(value: number | string) {
    this._weight = value;
  }
}
