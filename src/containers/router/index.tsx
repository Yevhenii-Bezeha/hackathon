import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'common';
import { PokemonContainer, PokemonsContainer, SignInContainer, SignOutContainer, HomeContainer } from 'containers';
const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} exact>
          <HomeContainer />
        </Route>
        <Route path={Routes.ALL} exact>
          <PokemonsContainer />
        </Route>
        <Route path={Routes.ONE} exact>
          <PokemonContainer />
        </Route>
        <Route path={Routes.SIGN_IN} exact>
          <SignInContainer />
        </Route>
        <Route path={Routes.SIGN_OUT} exact>
          <SignOutContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
