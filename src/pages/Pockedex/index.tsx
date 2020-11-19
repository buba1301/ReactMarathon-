/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import s from './Pockedex.module.scss';

import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner';
import Modal from '../../components/Modal';

import useData from '../../hook/getData';

export interface IPokemonsApi {
  name: string;
  id: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  types: string[];
  img: string;
  abilities: string[];
  baseExperience: number;
}
interface IData extends IPokemonsApi {
  total: number;
  count: number;
  offset: number;
  limit: string;
  pokemons: IPokemonsApi[];
}

interface IUsePokemon extends IData {
  isLoading: boolean;
  isError: boolean;
  data: IData;
}

const pagination: string[] = ['1', '2', '3', '4', '5'];

const filterNames: string[] = ['Type', 'Attack', 'Experience'];

const pokemonsOnPage = 9;

const Pockedex = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<object>({ limit: pokemonsOnPage });
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemonsApi | null | undefined>(null);

  const { data, isLoading, isError } = useData<IUsePokemon>('getPokemons', query, [searchValue, currentPage]);

  const handleSeachChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
      limit: pokemonsOnPage,
    }));
  };

  const handleChangePage = (e: React.ChangeEvent<HTMLDivElement>) => {
    setCurrentPage(e.target.id);
    setQuery((s) => ({
      ...s,
      limit: pokemonsOnPage,
      offset: e.target.id,
    }));
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>): void => {
    const currentPokemon = data && data.pokemons.find((pokemon: IPokemonsApi): boolean => pokemon.id === +e.target.id);

    setPokemon(currentPokemon);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
    setPokemon(null);
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
          <Heading className={s.heading}>{data && data.total} Pokemons for you to choose your favorite</Heading>
          <div className={s.inputWrap}>
            <input type="text" value={searchValue} placeholder="Encuentra tu pokémon..." onChange={handleSeachChange} />
          </div>
        </div>
        <div className={s.filtersConteiner}>
          {filterNames.map((name) => (
            <Dropdown key={name} name={name} />
          ))}
        </div>
        <div>
          <div className={s.cardConteiner}>
            {data &&
              data.pokemons.map(({ name, stats, types, img, id }: IPokemonsApi) => {
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
            <input key={id} id={id} type="radio" checked={currentPage === id} onChange={handleChangePage} />
          ))}
        </div>
        <Footer />
        {showModal && pokemon && <Modal pokemon={pokemon} handleCloseModal={handleCloseModal} showModal={showModal} />}
      </Layout>
    </div>
  );
};

export default Pockedex;
