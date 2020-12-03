/* eslint-disable no-console */
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
import { filtersNames } from "../../utils/filterNames";

const pagination: string[] = ["0", "1", "2", "3", "4"];

interface IQuery {
  name?: string;
  limit?: number;
  offset?: number;
  types?: string;
}

interface IFilters {
  [key: string]: boolean;
}

const Pockedex = () => {
  const pokemonsOnPage = getPokemonsOnPage();
  const pageOffset = pokemonsOnPage;

  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [query, setQuery] = useState<IQuery>({
    limit: pokemonsOnPage,
    offset: 0,
    types: "",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemonsApi | null | undefined>(null);
  const [filters, setFilters] = useState<IFilters>({
    Fire: false,
    Normal: false,
    Electric: false,
    Water: false,
  });

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IUsePokemon>(
    "getPokemons",
    query,
    [debounceValue, currentPage, filters, query]
  );

  console.log(
    "!!!",
    data?.pokemons.map((i) => i.types)
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

    const newFilterState = !filters[filterName];

    setFilters((state: IFilters) => ({
      ...state,
      [filterName]: newFilterState,
    }));

    const queryTypesToArray = query.types?.split("|");

    const isCurrentFilterInQuery = (
      queryTypesToArray: string[] | undefined
    ) => {
      return queryTypesToArray?.findIndex(
        (item) => item === filterName.toLowerCase()
      );
    };

    const setFilterInQuery = (typesQuery: string | undefined): void => {
      setQuery((state: IQuery) => ({
        ...state,
        types: typesQuery,
      }));
    };

    if (isCurrentFilterInQuery(queryTypesToArray) === -1) {
      const typesQuery = [filterName.toLowerCase(), ...queryTypesToArray].join(
        "|"
      );

      setFilterInQuery(typesQuery);
    } else {
      const typesQuery = queryTypesToArray
        ?.filter((i: string | undefined) => i !== filterName.toLowerCase())
        .join("|");

      setFilterInQuery(typesQuery);
    }
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
          {filtersNames.map((name: string) => (
            <Dropdown
              key={name}
              name={name}
              handleChange={handleChangeFilter}
              filterState={filters}
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
