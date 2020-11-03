import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.logo, s.w30)}>
        <img src="/public/logo.png" alt="Pockemon" />
      </div>

      <nav className={cn(s.w70)}>
        <ul className={cn(s.nav)}>
          <li className={cn(s.li)}>
            <a href="/" className={cn(s.font)}>
              Home
            </a>
          </li>
          <li className={s.li}>
            <a href="/poke" className={cn(s.font)}>
              Pokedex
            </a>
          </li>
          <li className={s.li}>
            <a href="/legend" className={cn(s.font)}>
              Legendaries
            </a>
          </li>
          <li className={s.li}>
            <a href="/404" className={cn(s.font)}>
              Documentation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

/*
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.groupe95)}>
        <div className={cn(s.logo)}>
          <img src="/public/logo.png" alt="Pockemon" className={cn(s.groupe)} />
        </div>
        <nav className={cn(s.navbar)}>
          <ul className={cn(s.menu)}>
            <li className={cn(s.menuItemActive)}>
              <a href="/" className={cn(s.home)}>
                Home
              </a>
              <div className={s.line1} />
            </li>
            <li className={s.menuItem1}>
              <a href="/poke" className={cn(s.pokedex)}>
                Pokedex
              </a>
            </li>
            <li className={s.menuItem2}>
              <a href="/legend" className={cn(s.legendaries)}>
                Legendaries
              </a>
            </li>
            <li className={s.menuItem3}>
              <a href="/404" className={cn(s.documentation)}>
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={cn(s.headerContainer)}>
        <div className={cn(s.rectangle2, s.third)} />
      </div>
    </header>
  );
*/
