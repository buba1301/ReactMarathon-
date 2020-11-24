import React from 'react';
import { A } from 'hookrouter';

import { GENERAL_MENU } from '../../routes';

import s from './GeneralMenu.module.scss';

interface IGeneralMenu {
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const GeneralMenu: React.FC<IGeneralMenu> = ({ handleClick = () => {} }) => {
  return (
    <>
      {GENERAL_MENU.map(({ link, title }) => {
        return (
          <A key={title} href={link} className={s.link} onClick={handleClick}>
            {title}
          </A>
        );
      })}
    </>
  );
};

export default GeneralMenu;
