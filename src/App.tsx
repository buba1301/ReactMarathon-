import React from 'react';
import { useRoutes } from 'hookrouter';

import { routes } from './routes';

import Header from './components/Header/Header';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

// import s from "./App.module.scss";
import Footer from './components/Footer/Footer';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
