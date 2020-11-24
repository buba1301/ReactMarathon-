/* eslint-disable no-shadow */
import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pockedex from './pages/Pockedex';
import Legendaries from './pages/Legendaries/Legendaries';
import Documentation from './pages/Documentation/Documentation';
import Pokemon, { PokemonProps } from './components/Pokemon';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

interface IMenu {
  link: LinkEnum;
  title: string;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IMenu[] = [
  {
    link: LinkEnum.HOME,
    title: 'Home',
    component: () => <HomePage />,
  },
  {
    link: LinkEnum.POKEDEX,
    title: 'Pockedex',
    component: () => <Pockedex />,
  },
  {
    link: LinkEnum.LEGENDARIES,
    title: 'Legendaries',
    component: () => <Legendaries />,
  },
  {
    link: LinkEnum.DOCUMENTATION,
    title: 'Documentation',
    component: () => <Documentation />,
  },
];

const SECOND_ROUTES: IMenu[] = [
  {
    link: LinkEnum.POKEMON,
    title: 'Pokemon',
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, { link, component }: IMenu) => {
  return { ...acc, [link]: component };
}, {});
