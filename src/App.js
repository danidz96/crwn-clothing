import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import GlobalStyles from './GlobalStyles';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { useAuth } from './hooks/useAuth';
import CheckoutPage from './pages/Checkout/CheckoutPage';

function App() {
  const currentUser = useAuth();
  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
