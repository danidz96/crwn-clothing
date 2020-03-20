import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyles from "./GlobalStyles";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
