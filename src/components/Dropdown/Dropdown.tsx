import React from 'react';

import s from './Dropdown.module.scss';

interface DropDownProps {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

interface IFilters {
  [key: string]: string[];
}

const filters: IFilters = {
  Type: ['Fire', 'Normal', 'Electric', 'Water'],
  Attack: ['< 50', '50-100', '100 - 150', '150 <'],
  Experience: ['< 50', '50-100', '100 - 150', '150 <'],
};

const Dropdown: React.FC<DropDownProps> = ({ name }) => {
  return (
    <div className={s.dropdown}>
      <span className={s.label}>{name}</span>

      <div id="myDropdown" className={s.dropdownContent}>
        {filters[name].map((filter) => (
          <div key={filter}>
            <input type="checkbox" />
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
