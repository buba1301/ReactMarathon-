import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={s.footer}>
        <div className={s.wrap}>
          <div className={s.makeLove}>
            <span role="img" aria-label="Heart">
              Make with ❤️
            </span>
          </div>
          <div>
            <a href="##" className={s.ourTeam}>
              Our team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
