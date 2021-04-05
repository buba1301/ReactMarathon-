const toCapitalizeFirstLetter = (str: string): string => {
  const capital = str.slice(0, 1).toUpperCase();
  const subStr = str.slice(1);
  return `${capital}${subStr}`;
};

export default toCapitalizeFirstLetter;
