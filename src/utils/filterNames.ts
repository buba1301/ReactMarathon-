interface IFilters {
  [key: string]: string[];
}

export const filterByTypes: string[] = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "normal",
  "rock",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "poison",
  "steel",
  "ghost",
  "glass",
  "ground",
  "ice",
  "psychic",
  "water",
];

const filters: IFilters = {
  Type: filterByTypes,
  Attack: ["< 50", "50-100", "100 - 150", "150 <"],
  Experience: ["< 50", "50-100", "100 - 150", "150 <"],
  HealthPoint: ["< 50", "50-100", "100 - 150", "150 <"],
  Defense: ["< 50", "50-100", "100 - 150", "150 <"],
  Speed: ["< 50", "50-100", "100 - 150", "150 <"],
};

export const filtersNames: string[] = Object.keys(filters);

export default filters;
