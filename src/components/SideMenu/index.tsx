import React from 'react';
import cn from 'classnames';
import s from './SideMenu.module.scss';
import GeneralMenu from '../GeneralMenu';

interface ISideMenu {
  isMenuOpen: boolean;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  isPhoneWidth: boolean;
}
const SideMenu = ({ isMenuOpen, handleClick, isPhoneWidth }: ISideMenu) => {
  const classNames = cn(s.root, isMenuOpen ? s.open : '');

  return <div className={classNames}>{isPhoneWidth ? <GeneralMenu handleClick={handleClick} /> : <GeneralMenu />}</div>;
};

export default SideMenu;
