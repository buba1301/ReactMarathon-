import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.groupe95)}>
        <img src="/public/logo.png" className={cn(s.logo)} />
        <nav className={cn(s.navbar)}>
          <div className={cn(s.menuItemActive)}>
            <a href="/" className={cn(s.home)}>
              Home
            </a>
          </div>
          <div className={s.menuItem1}>
            <a href="/poke" className={cn(s.pokedex)}>
              Pokedex
            </a>
          </div>
          <div className={s.menuItem2}>
            <a href="/legend" className={cn(s.legendaries)}>
              Legendaries
            </a>
          </div>
          <div className={s.menuItem3}>
            <a href="/doc" className={cn(s.documentation)}>
              Documentation
            </a>
          </div>
        </nav>
      </div>
      <div className={cn(s.headerContainer)}>
        <div className={cn(s.rectangle2, s.third)} />
      </div>
    </header>
  );
};

export default Header;
