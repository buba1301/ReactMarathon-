/* eslint-disable no-shadow */
import React from 'react';
import HomePage from './pages/Home';
import Pockedex from './pages/Pockedex';
import Legendaries from './pages/Legendaries/Legendaries';
import Documentation from './pages/Documentation/Documentation';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IMenu {
  link: LinkEnum;
  title: string;
  component: () => JSX.Element;
}

export const host = 'http://zar.hosthot.ru/api/v1/pokemons?limit=9';

export const getQueryParams = (key: string, value: string): string => {
  return [key, value].join('=');
};

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

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

export const routes = GENERAL_MENU.reduce((acc: IAccMenu, { link, component }: IMenu) => {
  return { ...acc, [link]: component };
}, {});
