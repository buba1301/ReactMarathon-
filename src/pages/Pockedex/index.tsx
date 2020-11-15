/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import camalize from 'camelize';

import s from './Pockedex.module.scss';

import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner';

import { host, getQueryParams } from '../../routes';

interface IPokemonsApi {
  name: string;
  id: number;
  stats: {
    attack: number;
    defense: number;
  };
  types: string[];
  img: string;
}
interface IData {
  total?: number;
  count?: number;
  offset?: number;
  limit?: string;
  pokemons?: IPokemonsApi[];
}

interface IUsePokemon {
  isLoading: boolean;
  isError: boolean;
  data: IData;
}

const pagination: string[] = ['1', '2', '3', '4', '5'];

const filterNames: string[] = ['Type', 'Attack', 'Experience'];

const usePokemons = (currentPage: string): IUsePokemon => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const offset = getQueryParams('offset', currentPage);
        const url = [host, offset].join('&');
        const response = await fetch(url);
        const result = await response.json();

        setData(camalize(result));
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, [currentPage]);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pockedex = () => {
  const [currentPage, setCurrentPage] = useState('1');

  const { data, isLoading, isError } = usePokemons(currentPage);

  const { total, pokemons } = data;

  const handleClick = ({ target: { id } }: React.ChangeEvent) => {
    setCurrentPage(id);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Uppsss...</div>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.containerWrap}>
        <div className={s.containerInput}>
          <Heading className={s.heading}>
            {total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.inputWrap}>
            <input type="search" placeholder="Encuentra tu pokémon..." />
          </div>
        </div>
        <div className={s.filtersConteiner}>
          {filterNames.map((name) => (
            <Dropdown key={name} name={name} />
          ))}
        </div>
        <div>
          <div className={s.cardConteiner}>
            {pokemons &&
              pokemons.map(({ name, stats, types, img, id }: IPokemonsApi) => {
                const props = {
                  key: id,
                  name,
                  stats,
                  types,
                  img,
                };

                return <Card {...props} />;
              })}
          </div>
        </div>
        <div className={s.loader}>
          {pagination.map((id) => (
            <input key={id} id={id} type="radio" checked={currentPage === id} onChange={handleClick} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pockedex;
