/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';

import s from './Pockedex.module.scss';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import Dropdown from '../../components/Dropdown/Dropdown';

import pokemonsApi from './pokemons';

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
interface IPokemonsApi {
  name_clean: string;
  id: number;
  stats: {
    attack: number;
    defense: number;
  };
  types: Type[];
  img: string;
}

type Lists = {
  [x: string]: any;
};

const pagination: string[] = ['1', '2'];

const pockemonLists: Lists = {
  '1': pokemonsApi.slice(0, 9),
  '2': pokemonsApi.slice(9, 18),
};

const filterNames: string[] = ['Type', 'Attack', 'Experience'];

const Pockedex = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const [pokemonList, setPockemonList] = useState(pockemonLists['1']);

  const handleClick = ({ target: { id } }: React.ChangeEvent) => {
    setCurrentPage(id);
    setPockemonList(pockemonLists[id]);
  };

  return (
    <div className={s.root}>
      <Header />
      <div className={s.containerWrap}>
        <Layout className={s.containerInput}>
          <Heading className={s.heading}>
            800 <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.inputWrap}>
            <input type="search" placeholder="Encuentra tu pokémon..." />
          </div>
          <div className={s.filtersConteiner}>
            {filterNames.map((name) => (
              <Dropdown name={name} />
            ))}
          </div>
        </Layout>
        <Layout>
          <div className={s.cardConteiner}>
            {pokemonList.map(({ name_clean, stats, types, img, id }: IPokemonsApi) => {
              const props = {
                key: id,
                name: name_clean,
                stats,
                types,
                img,
              };

              return <Card {...props} />;
            })}
          </div>
        </Layout>
        <div className={s.loader}>
          {pagination.map((id) => (
            <input key={id} id={id} type="radio" checked={currentPage === id} onChange={handleClick} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pockedex;
