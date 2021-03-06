import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import NavBar from './components/header/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />

        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
