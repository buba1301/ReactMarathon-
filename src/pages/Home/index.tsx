import React from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
};

export default HomePage;
