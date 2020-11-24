import React from 'react';
import { capitalize } from 'lodash';
import cn from 'classnames';

import Heading from '../Heading/Heading';

import s from './Card.module.scss';
import { IPokemonsApi } from '../../interface/pokemons';

interface ICard {
  handleOpen: (event: React.MouseEvent<HTMLDivElement>) => void;
  pokemon: IPokemonsApi;
}

const PokemonCard = ({ pokemon, handleOpen }: ICard) => {
  const { name, stats, types, img, id } = pokemon;
  const { attack, defense } = stats;
  const [generalType] = types;
  const pokemonId = id.toString();

  return (
    <div className={s.root} onClick={handleOpen} id={pokemonId} role="presentation">
      <div className={s.infoWrap} id={pokemonId}>
        <Heading className={s.titleName}>{capitalize(name)}</Heading>
        <div className={s.statWrap} id={pokemonId}>
          <div className={s.statItem} id={pokemonId}>
            <div className={s.statValue} id={pokemonId}>
              {attack}
            </div>
            Attack
          </div>
          <div className={s.statItem} id={pokemonId}>
            <div className={s.statValue} id={pokemonId}>
              {defense}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap} id={pokemonId}>
          {types.map((type: string) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])} id={pokemonId}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[generalType as keyof typeof s])} id={pokemonId}>
        <img src={img} alt={capitalize(name)} id={pokemonId} />
      </div>
    </div>
  );
};

export default PokemonCard;
