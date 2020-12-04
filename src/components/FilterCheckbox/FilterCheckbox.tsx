import React from "react";
import toCapitalizeFirstLetter from "../../utils/toCapitalizeFirstLetter";

import s from "./FilterCheckbox.module.scss";

interface IProps {
  filtersList: string[];
  name: string;
  handleChangeTypesFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterCheckbox: React.FC<IProps> = ({
  filtersList,
  name,
  handleChangeTypesFilter,
}) => {
  const checked = filtersList.includes(name);

  return (
    <div className={s.checkBoxContainer}>
      <input
        type="checkbox"
        name={name}
        onChange={handleChangeTypesFilter}
        checked={checked}
      />
      {toCapitalizeFirstLetter(name)}
    </div>
  );
};

export default FilterCheckbox;
