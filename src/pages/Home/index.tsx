/* eslint-disable no-console */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Index';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';

import s from './Home.module.scss';

const HomePage: React.FC<RouteComponentProps> = ({ history: { push } }) => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading className={s.heading1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading className={s.heading2}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => push('/pockedex')} size="normal">
            See pokemons
          </Button>
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
