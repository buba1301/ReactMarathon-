/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { omit } from "lodash";
import { useForm } from "react-hook-form";
import s from "./FilterInput.module.scss";
import Button from "../Button/Index";
import { IQuery } from "../../pages/Pockedex";

interface IFormInput {
  [key: string]: string | number | string[];
}
interface IFolterInputProps {
  name: string;
  isOpen: boolean;
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterInput: React.FC<IFolterInputProps> = ({
  name,
  query,
  setQuery,
  isOpen,
  setIsOpen,
}) => {
  const nameFrom = `${name.toLowerCase()}_from`;
  const nameTo = `${name.toLowerCase()}_to`;

  const { register, handleSubmit, reset, errors } = useForm<IFormInput>({
    defaultValues: {
      [nameFrom]: query[nameFrom as keyof typeof query],
      [nameTo]: query[nameTo as keyof typeof query],
    },
  });

  const onSubmit = (data: IFormInput) => {
    setQuery((state) => ({
      ...state,
      ...data,
    }));
    setIsOpen(!isOpen);
  };

  const handleResetClick = () => {
    reset({
      [nameFrom]: "",
      [nameTo]: "",
    });
    setQuery((state) => {
      return omit(state, [nameFrom, nameTo]);
    });
    setIsOpen(!isOpen);
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
          <Button size="small" type="submit" onClick={handleResetClick}>
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
