/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import s from "./FilterInput.module.scss";
import Button from "../Button/Index";
import { IQuery } from "../../pages/Pockedex";
// import Line from "./assests/Line.png";

interface IFormInput {
  [key: string]: string | number;
}
interface IFolterInputProps {
  name: string;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
}

const FilterInput: React.FC<IFolterInputProps> = ({
  name,
  query,
  setQuery,
}) => {
  const nameFrom = `${name.toLowerCase()}_from`;
  const nameTo = `${name.toLowerCase()}_to`;

  const { register, handleSubmit, errors } = useForm<IFormInput>({
    defaultValues: {
      [nameFrom]: query[nameFrom],
      [nameTo]: query[nameTo],
    },
  });

  const onSubmit = (data: IFormInput) => {
    // setFilterValue(data);
    setQuery((state) => ({
      ...state,
      ...data,
    }));
  };

  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.wrap}>
        <div className={s.inputWrap}>
          <label htmlFor={nameFrom} className={s.headerFrom}>
            From
          </label>
          <input
            className={s.input}
            name={nameFrom}
            id={nameFrom}
            ref={register({ min: 0 })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && errors.name.type === "min" && (
            <span role="alert">{errors.name}</span>
          )}
        </div>

        <div className={s.inputWrap}>
          <label htmlFor={nameTo} className={s.headerTo}>
            To
          </label>
          <input
            className={s.input}
            name={nameTo}
            id={nameTo}
            ref={register({ min: 0 })}
            aria-invalid={errors.name ? "true" : "false"}
          />
        </div>
        <div className={s.buttonWrap}>
          <Button size="small" type="submit">
            Reset
          </Button>
          <Button size="small" type="submit">
            Apply
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterInput;
// <img src={Line} alt="Line" />
// <div className={s.inputWrap}>

/*
<div className={s.wrap}>
        <div className={s.headerWrap}>
          <div className={s.header}>From</div>
          <div className={s.inputWrap}>
            <input
              name={`${name.toLowerCase()}_from`}
              className={s.input}
              value={filterValueFrom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={s.headerWrap}>
          <div className={s.header}>To</div>
          <div className={s.inputWrap}>
            <input
              name={`${name.toLowerCase()}_to`}
              className={s.input}
              value={filterValueTo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className={s.buttonWrap}>
        <Button size="small">Apply</Button>
      </div>
*/
