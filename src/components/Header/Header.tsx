import React from 'react';
import { A } from 'hookrouter';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

import { GENERAL_MENU } from '../../routes';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.logo}>
          <PokemonLogoSvg />
        </div>

        <div className={s.nav}>
          {GENERAL_MENU.map(({ link, title }) => {
            return (
              <A key={title} href={link} className={s.link}>
                {title}
              </A>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
