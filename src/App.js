import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import GlobalStyles from './GlobalStyles';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { useAuth } from './hooks/useAuth';

function App() {
  const currentUser = useAuth();
  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp />
        </Route>
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
