export interface IPokemonsApi {
  name: string;
  id: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  types: string[];
  img: string;
  abilities: string[];
  baseExperience: number;
}

export interface IData extends IPokemonsApi {
  total: number;
  count: number;
  offset: number;
  limit: string;
  pokemons: IPokemonsApi[];
}

export interface IUsePokemon extends IData {
  isLoading: boolean;
  isError: boolean;
  data: IData;
}
