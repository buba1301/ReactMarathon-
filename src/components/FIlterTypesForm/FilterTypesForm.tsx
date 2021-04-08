import React from "react";
import { useForm } from "react-hook-form";
import { IData } from "../../interface/pokemons";
import { IQuery } from "../../pages/Pockedex";
import { filterByTypes } from "../../utils/filterNames";
import toCapitalizeFirstLetter from "../../utils/toCapitalizeFirstLetter";
import Button from "../Button/Index";

import s from "./FilterTypesForm.module.scss";

interface IFilterTypesForm {
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  filtersTypesList: string[];
  setFiltersList: React.Dispatch<React.SetStateAction<string[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterTypesForm: React.FC<IFilterTypesForm> = ({
  filtersTypesList,
  setQuery,
  setFiltersList,
  setIsOpen,
  isOpen,
}) => {
  const values = filtersTypesList.reduce((acc, item) => {
    return { ...acc, [item]: true };
  }, {});

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const handleChangeTypesFilter = (data: IData) => {
    const activeFiltersList = Object.entries(data).filter(
      ([, state]) => state === true
    );

    const activeFiltersNames = activeFiltersList.map(
      ([filterName]) => filterName
    );
    setQuery((state: IQuery) => ({
      ...state,
      types: activeFiltersNames.join("|"),
    }));
    setFiltersList(activeFiltersNames);
    setIsOpen(!isOpen);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(handleChangeTypesFilter)}>
      {filterByTypes.map((filterName: string) => {
        return (
          <div className={s.checkBoxContainer} key={filterName}>
            <input
              type="checkbox"
              name={filterName}
              placeholder={filterName}
              ref={register}
            />
            {toCapitalizeFirstLetter(filterName)}
          </div>
        );
      })}
      <Button type="submit" size="small">
        Apply
      </Button>
    </form>
  );
};

export default FilterTypesForm;
