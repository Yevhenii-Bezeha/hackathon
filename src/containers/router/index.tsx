import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'common';
import { PokemonContainer, PokemonsContainer, HomeContainer } from 'containers';

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
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
