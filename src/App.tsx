import React from 'react';
import { useRoutes } from 'hookrouter';

import { routes } from './routes';

import Header from './components/Header/Header';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
