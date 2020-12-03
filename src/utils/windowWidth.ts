const getPokemonsOnPage = (): number => {
  const isTableWidth = window.matchMedia("(max-width: 1024px)").matches;

  return isTableWidth ? 10 : 9;
};

export default getPokemonsOnPage;
