import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const navItems = ['Home', 'Pockedex', 'Legendaries', 'Documentation'];

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.logo, s.w30)}>
        <img src="/public/logo.png" alt="Pockemon" />
      </div>

      <nav className={cn(s.w70)}>
        <ul className={cn(s.nav)}>
          {navItems.map((item) => {
            return (
              <li className={cn(s.li)}>
                <a href={`/${item}`} className={cn(s.link)}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
