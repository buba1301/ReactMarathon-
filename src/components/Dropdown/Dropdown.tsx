import React from "react";

import s from "./Dropdown.module.scss";
import { filterByTypes } from "../../utils/filterNames";
import toCapitalizeFirstLetter from "../../utils/toCapitalizeFirstLetter";
import FilterInput from "../FilterInput/FilterInput";

interface IFiltersState {
  [key: string]: boolean;
}
interface DropDownProps {
  name: string;
  filterState: IFiltersState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/* interface IFilters {
  [key: string]: string[];
}

const filters: IFilters = {
  Type: ["Fire", "Normal", "Electric", "Water"],
  Attack: ["< 50", "50-100", "100 - 150", "150 <"],
  Experience: ["< 50", "50-100", "100 - 150", "150 <"],
}; */

const Dropdown: React.FC<DropDownProps> = ({
  name,
  handleChange,
  filterState,
}) => {
  return (
    <div className={s.dropdown}>
      <span className={s.label}>{name}</span>

      <div id="myDropdown" className={s.dropdownContent}>
        {name === "Type" ? (
          filterByTypes.map((filter: string) => {
            const checked = filterState[filter];

            return (
              <div key={filter} className={s.checkBoxContainer}>
                <input
                  type="checkbox"
                  name={filter}
                  onChange={handleChange}
                  checked={checked}
                />
                {toCapitalizeFirstLetter(filter)}
              </div>
            );
          })
        ) : (
          <FilterInput />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
