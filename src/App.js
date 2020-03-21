import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
