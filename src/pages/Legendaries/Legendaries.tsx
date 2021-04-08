import React from 'react';

import s from './Legendaries.module.scss';

import img from './assets/pngwing.png';

const Legendaries = () => {
  return (
    <div className={s.root}>
      <div className={s.item1}>
        <div className={s.header}>
          <div className={s.headerContainer}>Legendaries</div>
        </div>
        <div className={s.main}>
          <div className={s.image}>
            <img src={img} alt="Small PokeBall" />
          </div>
          <div className={s.textContainer}>
            <div className={s.textHeader}>MewTwo</div>
            <div className={s.text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.{' '}
            </div>
            <div className={s.skillsWrap}>
              <div className={s.skillBox} />
              <div className={s.skillBox} />
              <div className={s.skillBox} />
              <div className={s.skillBox} />
              <div className={s.skillBox} />
              <div className={s.skillBox} />
            </div>
          </div>
        </div>
        <div className={s.cards}>
          <div className={s.errow} />
          <div className={s.cardsWrap}>
            <div className={s.card} />
            <div className={s.card} />
            <div className={s.card} />
            <div className={s.card} />
            <div className={s.card} />
            <div className={s.card} />
          </div>
          <div className={s.errow} />
        </div>
      </div>
    </div>
  );
};

export default Legendaries;
