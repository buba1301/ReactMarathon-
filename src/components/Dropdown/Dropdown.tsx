import React, { useState } from "react";

import s from "./Dropdown.module.scss";

import FilterInput from "../FilterInput/FilterInput";
import { IQuery } from "../../pages/Pockedex";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { filterByTypes } from "../../utils/filterNames";

interface DropDownProps {
  name: string;
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  filtersTypesList: string[];
  setFiltersList: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dropdown: React.FC<DropDownProps> = ({
  name,
  query,
  setQuery,
  filtersTypesList,
  setFiltersList,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setQuery((state: IQuery) => ({
        ...state,
        types: filtersTypesList,
      }));
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleChangeTypesFilter = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const filterName = e.target.name;

    const isCurrentFilterInQuery = () => {
      return filtersTypesList?.findIndex(
        (item: string) => item === filterName.toLowerCase()
      );
    };

    const newFiltersLest =
      isCurrentFilterInQuery() === -1
        ? [...filtersTypesList, filterName]
        : filtersTypesList.filter((item: string) => item !== filterName);

    setFiltersList(newFiltersLest);
  };

  return (
    <div className={s.dropdown}>
      <button type="button" onClick={handleClick} className={s.label}>
        {name}
      </button>

      {isOpen && (
        <div id="myDropdown" className={s.dropdownContent}>
          {name === "Type" ? (
            filterByTypes.map((filterName: string) => {
              return (
                <FilterCheckbox
                  name={filterName}
                  key={filterName}
                  filtersList={filtersTypesList}
                  handleChangeTypesFilter={handleChangeTypesFilter}
                />
              );
            })
          ) : (
            <FilterInput name={name} query={query} setQuery={setQuery} />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
