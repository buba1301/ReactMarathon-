import React, { useState } from 'react';
import cn from 'classnames';
import s from './Dropdown.module.scss';
import FilterInput from '../FilterInput/FilterInput';
import { IQuery } from '../../pages/Pockedex';
import Button from '../Button/Index';
import useMediaWidth from '../../hook/getMedia';
import FilterTypesForm from '../FIlterTypesForm/FilterTypesForm';

interface DropDownProps {
  name: string;
  query: IQuery;
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
  filtersTypesList: string[];
  setFiltersList: React.Dispatch<React.SetStateAction<string[]>>;
}

// eslint-disable-next-line no-shadow
enum DropDownContent {
  Type = 'left',
  Attack = 'left',
  Experience = 'left',
  HealthPoint = 'right',
  Defense = 'right',
  Speed = 'right',
}

const Dropdown: React.FC<DropDownProps> = ({ name, query, setQuery, filtersTypesList, setFiltersList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropMenuDirections, setDropMenuDirections] = useState<string>('');

  const isPhoneWidth = useMediaWidth();

  const classNamesDropDown = cn(s.dropdownContent, s[dropMenuDirections as keyof typeof s]);

  /* const values = filtersTypesList.reduce((acc, item) => {
    return { ...acc, [item]: true };
  }, {});

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  }); */

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & { name: string };

    setDropMenuDirections(DropDownContent[target.name as keyof typeof DropDownContent]);
    setIsOpen(!isOpen);
  };

  if (isPhoneWidth) {
    return null;
    // ???
  }

  return (
    <div className={s.dropdown}>
      <Button type="button" size="middle" name={name} onClick={handleClick}>
        {name}
      </Button>
      {isOpen && (
        <div id="myDropdown" className={classNamesDropDown}>
          {name === 'Type' ? (
            <FilterTypesForm
              filtersTypesList={filtersTypesList}
              query={query}
              setQuery={setQuery}
              setFiltersList={setFiltersList}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ) : (
            <FilterInput name={name} query={query} setQuery={setQuery} isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

/*
<div id="myDropdown" className={classNamesDropDown}>
          {name === "Type" ? (
            <form
              className={s.form}
              onSubmit={handleSubmit(handleChangeTypesFilter)}
            >
              {filterByTypes.map((filterName: string) => {
                return (
                  <div className={s.checkBoxContainer} key={filterName}>
                    <input
                      type="checkbox"
                      name={filterName}
                      placeholder={filterName}
                      ref={register}
                    />
                    {toCapitalizeFirstLetter(filterName)}
                  </div>
                );
              })}
              <Button type="submit" size="small">Apply</Button>
            </form>
*/

/*
(
        <Button type='button' size='middle' name={name} onClick={handleClick}>
          {name}
        </Button>
*/
