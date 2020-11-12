/* eslint-disable no-console */
import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Index';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';
import Footer from '../../components/Footer/Footer';

import { LinkEnum } from '../../routes';
import s from './Home.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading className={s.heading1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading className={s.heading2}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)} size="normal">
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
