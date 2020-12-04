import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./Dropdown.module.scss";

import FilterInput from "../FilterInput/FilterInput";
import { IQuery } from "../../pages/Pockedex";
import { filterByTypes } from "../../utils/filterNames";
import toCapitalizeFirstLetter from "../../utils/toCapitalizeFirstLetter";

interface DropDownProps {
  name: string;
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  filtersTypesList: string[];
  setFiltersList: React.Dispatch<React.SetStateAction<string[]>>;
}

interface IData {
  [key: string]: boolean;
}

const Dropdown: React.FC<DropDownProps> = ({
  name,
  query,
  setQuery,
  filtersTypesList,
  setFiltersList,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { register, handleSubmit } = useForm({
    defaultValues: filtersTypesList.reduce((acc, item) => {
      return { ...acc, [item]: true };
    }, {}),
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeTypesFilter = (data: IData) => {
    const activeFiltersList = Object.entries(data).filter(
      ([, state]) => state === true
    );
    const activeFiltersNames = activeFiltersList.map(
      ([filterName]) => filterName
    );

    setFiltersList(activeFiltersNames);
    setQuery((state: IQuery) => ({
      ...state,
      types: activeFiltersNames,
    }));
  };

  return (
    <div className={s.dropdown}>
      <button type="button" onClick={handleClick} className={s.label}>
        {name}
      </button>

      {isOpen && (
        <div id="myDropdown" className={s.dropdownContent}>
          {name === "Type" ? (
            <form
              className={s.form}
              onSubmit={handleSubmit(handleChangeTypesFilter)}
            >
              {filterByTypes.map((filterName: string) => {
                return (
                  <div className={s.checkBoxContainer}>
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
              <input type="submit" />
            </form>
          ) : (
            <FilterInput name={name} query={query} setQuery={setQuery} />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
