/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import camalize from 'camelize';
import cn from 'classnames';

import s from './Pockedex.module.scss';

import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal';

import { host, getQueryParams } from '../../routes';

export interface IPokemonsApi {
  name: string;
  id: number;
  stats: {
    attack: number;
    defense: number;
  };
  types: string[];
  img: string;
  abilities: string[];
  baseExperience: number;
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
  const [data, setData] = useState<IData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const offset = getQueryParams('limit', '1050');
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
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [showModal, setShowModal] = useState<string>('close');
  const [pokemon, setPokemon] = useState<IPokemonsApi | null>(null);

  const { data, isLoading, isError } = usePokemons(currentPage);

  const { total, pokemons } = data;

  const handleClick = ({ target: { id } }: React.ChangeEvent) => {
    setCurrentPage(id);
  };

  const handleOpenModal = ({ target: { id } }: React.ChangeEvent): void => {
    const currentPokemon = pokemons.find((pokemon) => pokemon.id === +id);

    setPokemon(currentPokemon);
    setShowModal('open');
  };

  const handleCloseModal = () => {
    setShowModal('close');
    setPokemon(null);
  };

  const classNamesOverlay = cn(s.overlay, s[showModal as keyof typeof s]);

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
                  id,
                  name,
                  stats,
                  types,
                  img,
                  handleOpenModal,
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
      {pokemon && <Modal pokemon={pokemon} handleCloseModal={handleCloseModal} showModal={showModal} />}

      <div className={classNamesOverlay} onClick={handleCloseModal} role="presentation" />
    </div>
  );
};

export default Pockedex;
