/* eslint-disable no-console */
import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Index';
import Parallax from '../../components/Parallax/Parallax';
import Heading from '../../components/Heading/Heading';
import { LinkEnum } from '../../routes';
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={s.root}>
      <Layout className={s.contentWrap}>
        <Parallax />
        <div className={s.contentText}>
          <Heading className={s.heading1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading className={s.heading2}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)} size="normal" type="button">
            See pokemons
          </Button>
        </div>
      </Layout>
    </main>
  );
};

export default HomePage;
