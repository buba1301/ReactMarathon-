import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={cn(s.homeDesktop)}>
      <Header />
      <main className={s.padding}>Content</main>
      <Footer />
    </div>
  );
};

export default App;
