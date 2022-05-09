import React from 'react';
import Header from '../../components/Header/Header';
// import Home from '../../views/Home/Home';
import Home from '../../pages/Home/Home';
import Signin from '../../pages/Signin/Signin';
import Error from '../../pages/Error';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
