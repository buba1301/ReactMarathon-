import React from 'react';

import s from './Modal.module.scss';

const Modal = () => {
  return (
    <div className={s.root}>
      <div className={s.imageConteiner}>
        <img
          className={s.pictureWrap}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
          alt="Poke"
        />
        <div className={s.labelWrap}>
          <span className={s.label}>Grass</span>
          <span className={s.label}>Poison</span>
        </div>
      </div>

      <div className={s.infoWrap}>
        <div className={s.textWrap}>
          <div className={s.nameConteiner}>Charmeleon</div>
          <div className={s.generationContainer}>Generation 1</div>
          <div className={s.statValue}>345</div>
        </div>
        <div className={s.abilities}>
          <div>Abilities</div>
          <div>Overgrow - Chlorophyll</div>
        </div>

        <div className={s.experience}>
          <div className={s.hp}>
            <div className={s.cardTitle}>Healsy points</div>
            <div className={s.cardTitle}>100000</div>
            <div className={s.cardLabel}>
              <span />
            </div>
          </div>
          <div className={s.hp}>
            <div className={s.cardTitle}>Expiriens</div>
            <div className={s.cardValue}>100000</div>
            <div className={s.cardLabel}>
              <span />
            </div>
          </div>
        </div>

        <div className={s.cardBoxSquare}>
          <div className={s.card}>
            <div className={s.statValueCard}>34</div>
            <div className={s.statText}>Defense</div>
          </div>
          <div className={s.card}>
            <div className={s.statValueCard}>34</div>
            <div className={s.statText}>Defense</div>
          </div>
          <div className={s.card}>
            <div className={s.statValueCard}>34</div>
            <div className={s.statText}>Defense</div>
          </div>
          <div className={s.card}>
            <div className={s.card}>
              <div className={s.statValueCard}>34</div>
              <div className={s.statText}>Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
