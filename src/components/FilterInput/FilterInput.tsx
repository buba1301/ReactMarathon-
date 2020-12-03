import React from "react";
import Button from "../Button/Index";

import s from "./FilterInput.module.scss";

// import Line from "./assests/Line.png";

const FilterInput = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.headerWrap}>
          <div className={s.header}>From</div>
          <div className={s.inputWrap}>
            <input className={s.input} />
          </div>
        </div>
        <div className={s.headerWrap}>
          <div className={s.header}>To</div>
          <div className={s.inputWrap}>
            <input className={s.input} />
          </div>
        </div>
      </div>
      <div className={s.buttonWrap}>
        <Button size="small">Apply</Button>
      </div>
    </div>
  );
};

export default FilterInput;
// <img src={Line} alt="Line" />
// <div className={s.inputWrap}>
