/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

import s from "./Pockedex.module.scss";

import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import Dropdown from "../../components/Dropdown/Dropdown";
import Spinner from "../../components/Spinner";
import Modal from "../../components/Modal";
import useData from "../../hook/getData";
import useDebounce from "../../hook/useDebounce";

import { IPokemonsApi, IUsePokemon } from "../../interface/pokemons";
import getPokemonsOnPage from "../../utils/windowWidth";

const pagination: string[] = ["0", "1", "2", "3", "4"];

const filterNames: string[] = ["Type", "Attack", "Experience"];

interface IQuery {
  name?: string;
  limit?: string;
  offset?: string;
  types?: string;
}

const Pockedex = () => {
  const pokemonsOnPage = getPokemonsOnPage();
  const pageOffset = pokemonsOnPage;

  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [query, setQuery] = useState<object>({
    limit: pokemonsOnPage,
    offset: 0,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemonsApi | null | undefined>(null);
  const [filter, setFilter] = useState<string>("");

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IUsePokemon>(
    "getPokemons",
    query,
    [debounceValue, currentPage, filter]
  );

  const handleSeachChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
      limit: pokemonsOnPage,
    }));
  };

  const handleChangePage = (e: React.ChangeEvent<HTMLDivElement>): void => {
    const currentPage = Number(e.target.id);
    setCurrentPage(currentPage);
    setQuery((state: IQuery) => ({
      ...state,
      limit: pokemonsOnPage,
      offset: pageOffset * currentPage,
    }));
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>): void => {
    const currentPokemon =
      data &&
      data.pokemons.find((pokemon: IPokemonsApi): boolean => {
        return pokemon.id === +(e.target as HTMLElement).id;
      });

    setPokemon(currentPokemon);
    setShowModal(!showModal);
  };

  const handleCloseModal = (): void => {
    setShowModal(!showModal);
    setPokemon(null);
  };

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filterName = e.target.name;

    const setData = (value: string): void => {
      setFilter(value);
      setQuery((state: IQuery) => ({
        ...state,
        types: value.toLowerCase(),
      }));
    };

    const isFilterChecked = filterName === filter;

    isFilterChecked ? setData("") : setData(filterName);
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
            {!isLoading && data && data.total} Pokemons for you to choose your
            favorite
          </Heading>
          <div className={s.inputWrap}>
            <input
              type="text"
              value={searchValue}
              placeholder="Encuentra tu pokémon..."
              onChange={handleSeachChange}
            />
          </div>
        </div>
        <div className={s.filtersConteiner}>
          {filterNames.map((name: string) => (
            <Dropdown
              key={name}
              name={name}
              handleChange={handleChangeFilter}
              filterName={filter}
            />
          ))}
        </div>
        <div>
          <div className={s.cardConteiner}>
            {!isLoading &&
              data &&
              data.pokemons.map((pokemon: IPokemonsApi) => {
                return (
                  <Card
                    key={pokemon.id}
                    pokemon={pokemon}
                    handleOpen={handleOpenModal}
                  />
                );
              })}
          </div>
        </div>
        <div className={s.loader}>
          {pagination.map((id) => (
            <input
              key={id}
              id={id}
              type="radio"
              checked={currentPage.toString() === id}
              onChange={handleChangePage}
            />
          ))}
        </div>
        {showModal && pokemon && (
          <Modal
            pokemon={pokemon}
            handleCloseModal={handleCloseModal}
            showModal={showModal}
          />
        )}
      </Layout>
    </div>
  );
};

export default Pockedex;
