import React from 'react';
import useData from '../../hook/getData';
import { IPokemonsApi } from '../../interface/pokemons';
import Spinner from '../Spinner';

export interface PokemonProps {
  id: number | string;
}
const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemonsApi>('getPokemon', { id });

  if (isLoading) {
    return <Spinner />;
  }
  return <div>This is Pokemon {data?.name}</div>;
};

export default Pokemon;
