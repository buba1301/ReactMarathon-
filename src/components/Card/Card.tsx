import React from 'react';
import { capitalize } from 'lodash';
import cn from 'classnames';

import Heading from '../Heading/Heading';

import s from './Card.module.scss';

type Type =
  | 'stile'
  | 'dark'
  | 'rock'
  | 'grass'
  | 'bug'
  | 'fire'
  | 'fighting'
  | 'dragon'
  | 'water'
  | 'ice'
  | 'normal'
  | 'flying'
  | 'gosth'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'ghost'
  | 'ground'
  | 'electric';

interface ICard {
  // key: number;
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: Type[];
  img: string;
}

const PokemonCard = ({ name, stats, types, img }: ICard) => {
  const { attack, defense } = stats;
  const [generalType] = types;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading className={s.titleName}>{capitalize(name)}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[generalType])}>
        <img src={img} alt={capitalize(name)} />
      </div>
    </div>
  );
};

export default PokemonCard;
