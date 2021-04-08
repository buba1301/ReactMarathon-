import React from 'react';
import cn from 'classnames';

import s from './HamburgerButton.module.scss';

interface IMenuOpen {
  isMenuOpen: boolean;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const HamburgerButton = ({ isMenuOpen, handleClick }: IMenuOpen) => {
  const classNamesMenu = cn(s.root, isMenuOpen ? s.active : '');

  return (
    <div className={classNamesMenu} onClick={handleClick} role="presentation">
      <span className={s.burgerMenu} />
      <span className={s.burgerMenu} />
      <span className={s.burgerMenu} />
    </div>
  );
};

export default HamburgerButton;
