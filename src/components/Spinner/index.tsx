import React from 'react';

import s from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <span className={s.spinnerInner1} />
      <span className={s.spinnerInner2} />
      <span className={s.spinnerInner3} />
    </div>
  );
};

export default Spinner;
