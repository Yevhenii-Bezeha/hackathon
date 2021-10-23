import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'common';
import { PokemonContainer, PokemonsContainer } from 'containers';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.ROOT} exact></Route>
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
