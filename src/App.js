import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.comp';
import HomePage from './pages/homepage/homepage.comp';
import ShopPage from './pages/shop/shop.comp';

function App() {
  return (
    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </switch>
    </div>
  );
}

export default App;
