import React from 'react';
import HomePage from './pages/Home';
import Pockedex from './pages/Pockedex';
import Legendaries from './pages/Legendaries/Legendaries';
import Documentation from './pages/Documentation/Documentation';

interface IMenu {
  link: string;
  title: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IMenu[] = [
  {
    link: '/',
    title: 'Home',
    component: () => <HomePage />,
  },
  {
    link: '/pockedex',
    title: 'Pockedex',
    component: () => <Pockedex />,
  },
  {
    link: '/legendaries',
    title: 'Legendaries',
    component: () => <Legendaries />,
  },
  {
    link: '/documentation',
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
