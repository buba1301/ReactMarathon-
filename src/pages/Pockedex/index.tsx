/* eslint-disable camelcase */
import React, { useState } from 'react';

import s from './Pockedex.module.scss';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';

import pokemonsApi from './pokemons';

const pagination: string[] = ['1', '2'];

const pockemonLists = {
  '1': pokemonsApi.slice(0, 9),
  '2': pokemonsApi.slice(9, 18),
};

const Pockedex = () => {
  const [currentPage, setCurrentPage] = useState('1');
  const [pokemonList, setPockemonList] = useState(pockemonLists['1']);

  const handleClick = ({ target: { id } }) => {
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
            <input placeholder="Encuentra tu pokémon..." />
          </div>
          <div className={s.filtersConteiner}>Here will be filters</div>
        </Layout>
        <Layout>
          <div className={s.cardConteiner}>
            {pokemonList.map(({ name_clean, stats: { attack, defense }, types, img, id }) => (
              <Card key={id} name={name_clean} attack={attack} defense={defense} types={types} img={img} />
            ))}
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
