import React from 'react';
import cn from 'classnames';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={cn(s.footerText)}>
        <div className={cn(s.makeWithLove)}>
          <p className={cn(s.h3, s.pharagraph)}>Make with Love</p>
        </div>
        <div className={s.ourTeam}>
          <p className={cn(s.h3, s.pharagraph)}>Our team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
