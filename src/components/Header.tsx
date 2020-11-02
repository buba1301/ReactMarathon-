import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.groupe95)}>
        <img src="/public/logo.png" className={cn(s.logo)} />
        <nav className={cn(s.navbar)}>
          <a href="/" className={cn(s.menuItemActive)}>
            <span className={cn(s.home)}>Home</span>
          </a>
          <a href="/poke" className={s.menuItem1}>
            <span className={cn(s.pokedex)}>Pokedex</span>
          </a>
          <a href="/legend" className={s.menuItem2}>
            <span className={cn(s.legendaries)}>Legendaries</span>
          </a>
          <a href="/doc" className={s.menuItem3}>
            <span className={cn(s.documentation)}>Documentation</span>
          </a>
        </nav>
      </div>
      <div className={cn(s.headerContainer)}>
        <div className={cn(s.rectangle2, s.third)} />
      </div>
    </header>
  );
};

export default Header;
