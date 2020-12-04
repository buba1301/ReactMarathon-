import React from "react";
import FilterInput from "../../components/FilterInput/FilterInput";

import s from "./Documentation.module.scss";

const Documentation = ({ setQuery }) => {
  return (
    <div className={s.root}>
      <FilterInput name="Attack" setQuery={setQuery} />
    </div>
  );
};

export default Documentation;
