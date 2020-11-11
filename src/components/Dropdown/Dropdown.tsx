import React from 'react';
import Button from '../Button/Index';

import s from './Dropdown.module.scss';

interface DropDownProps {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const Dropdown: React.FC<DropDownProps> = ({ name }) => {
  return (
    <div className={s.dropdown}>
      <Button onClick={() => {}} size="small">
        {name}
      </Button>
      <div id="myDropdown" className={s.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default Dropdown;
