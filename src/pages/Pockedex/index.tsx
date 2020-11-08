import React from 'react';

import s from './Pockedex.module.scss';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';

const cards = [
  'Pachirisu',
  'Pyroar',
  'Pikachu',
  'Quilava',
  'Squirtle',
  'Charizard',
  'Mudkip',
  'Jigglypuff',
  'Tyranitar',
];

const Pockedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.container}>
        <p>800 Pokemons for you to choose your favorite</p>
        <input placeholder="Encuentra tu pokémon..." />
        <div className={s.filtersConteiner}>Here was filters</div>
        <div className={s.cardConteiner}>
          {cards.map((name) => (
            <div key={name} className={s.card}>
              {name}
            </div>
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pockedex;
