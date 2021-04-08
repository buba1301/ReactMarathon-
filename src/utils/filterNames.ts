interface IFilters {
  [key: string]: string[] | number[];
}

export const filterByTypes: string[] = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'normal',
  'rock',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'poison',
  'steel',
  'ghost',
  'glass',
  'ground',
  'ice',
  'psychic',
  'water',
];

const filters: IFilters = {
  Type: filterByTypes,
  Attack: [0, 0],
  Experience: [0, 0],
  HealthPoint: [0, 0],
  Defense: [0, 0],
  Speed: [0, 0],
};

export const filtersNames: string[] = Object.keys(filters);

export default filters;
