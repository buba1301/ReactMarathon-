import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <ul className={cn(s.footer)}>
        <li className={cn(s.w50, s.makeLove)}>
          <span role="img" aria-label="Heart">
            Make with ❤️
          </span>
        </li>
        <li className={cn(s.w50)}>
          <a href="##" className={cn(s.ourTeam)}>
            Our team
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
