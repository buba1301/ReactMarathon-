import React from 'react';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import s from './Header.module.scss';

interface IMenu {
  id: number;
  link: string;
  name: string;
}
const navItems: IMenu[] = [
  {
    id: 1,
    link: '/',
    name: 'Home',
  },
  {
    id: 2,
    link: '/pockedex',
    name: 'Pockedex',
  },
  {
    id: 3,
    link: '/legendaries',
    name: 'Legendaries',
  },
  {
    id: 4,
    link: '/documentation',
    name: 'Documentation',
  },
];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.logo}>
          <PokemonLogoSvg />
        </div>

        <div className={s.nav}>
          {navItems.map(({ id, link, name }) => {
            return (
              <a key={id} href={`/${link}`} className={s.link}>
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
