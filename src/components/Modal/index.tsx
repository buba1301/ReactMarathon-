import React from 'react';
import { capitalize } from 'lodash';

import s from './Modal.module.scss';

import closeIcon from './assets/closeIcon.png';

import useLockBodyScroll from '../../hook/lockBodyScroll';

import { IPokemonsApi } from '../../pages/Pockedex';
// TODO: добавить цвета на модалку:
// TODO: поправить расположение имени на модалке
interface IModalProps {
  showModal: boolean;
  handleCloseModal: (event: React.MouseEvent<HTMLDivElement>) => void;
  pokemon: IPokemonsApi;
}

const Modal = ({ showModal, handleCloseModal, pokemon }: IModalProps) => {
  const { name, stats, types, img, abilities, baseExperience } = pokemon;

  const statsList = Object.entries(stats).filter(([params]) => params !== 'hp' && params !== 'speed');
  const statsValues = Object.values(stats);
  const statsSum = statsValues.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const capitalizeAbilities = abilities.map((item) => capitalize(item));
  const abilitiesToString = capitalizeAbilities.join(' - ');

  const getPercentForWidth = (value: number): number => (value / 1000) * 100;

  useLockBodyScroll(showModal);

  return (
    <>
      <div className={s.closeButton} onClick={handleCloseModal} role="presentation">
        <img src={closeIcon} alt="closeIcon" />
      </div>
      <div className={s.modal}>
        <div className={s.imageConteiner}>
          <img className={s.pictureWrap} src={img} alt={name} />
          <div className={s.labelWrap}>
            {types.map((type) => (
              <span key={type} className={s.label}>
                {capitalize(type)}
              </span>
            ))}
          </div>
        </div>

        <div className={s.infoWrap}>
          <div className={s.textWrap}>
            <div className={s.nameConteiner}>{capitalize(name)}</div>
            <div className={s.generationContainer}>Generation 1</div>
            <div className={s.statsSum}>{statsSum}</div>
          </div>
          <div className={s.abilities}>
            <div>Abilities</div>
            <div>{abilitiesToString}</div>
          </div>

          <div className={s.experience}>
            <div className={s.hp}>
              <div className={s.cardTitle}>Healsy points</div>
              <div className={s.cardTitle}>{stats.hp}</div>
              <div className={s.cardLabel}>
                <span style={{ width: `${getPercentForWidth(stats.hp)}%` }} />
              </div>
            </div>
            <div className={s.hp}>
              <div className={s.cardTitle}>Expiriens</div>
              <div className={s.cardValue}>{baseExperience}</div>
              <div className={s.cardLabel}>
                <span style={{ width: `${getPercentForWidth(baseExperience)}%` }} />
              </div>
            </div>
          </div>

          <div className={s.cardBoxSquare}>
            {statsList.map(([params, value]) => (
              <div className={s.card} key={name}>
                <div className={s.statValueCard}>{value}</div>
                <div className={s.statText}>{capitalize(params)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.overlay} onClick={handleCloseModal} role="presentation" />
    </>
  );
};

export default Modal;
