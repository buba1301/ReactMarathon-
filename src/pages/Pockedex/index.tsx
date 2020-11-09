/* eslint-disable camelcase */
import React from 'react';

import s from './Pockedex.module.scss';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

import pokemonsApi from './pokemons';

const Pockedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.container}>
        <p>800 Pokemons for you to choose your favorite</p>
        <input placeholder="Encuentra tu pokémon..." />
        <div className={s.filtersConteiner}>Here was filters</div>
        <div className={s.cardConteiner}>
          {pokemonsApi.map(({ name_clean, stats: { attack, defense }, types, img, id }) => (
            <Card key={id} name={name_clean} attack={attack} defense={defense} types={types} img={img} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pockedex;
