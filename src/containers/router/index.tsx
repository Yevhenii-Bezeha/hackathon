import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from 'common';
import {
  PokemonContainer,
  PokemonsContainer,
  SignInContainer,
  SignOutContainer,
  SignUpContainer,
  HomeContainer,
  NotFoundContainer,
  AdminContainer,
  UserContainer,
} from 'containers';

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
        <Route path={Routes.ADMIN} exact>
          <AdminContainer />
        </Route>
        <Route path={Routes.SIGN_IN} exact>
          <SignInContainer />
        </Route>
        <Route path={Routes.SIGN_UP} exact>
          <SignUpContainer />
        </Route>
        <Route path={Routes.SIGN_OUT} exact>
          <SignOutContainer />
        </Route>
        <Route path={Routes.PROFILE} exact>
          <UserContainer />
        </Route>
        <Route path={Routes.NOT_FOUND} exact>
          <NotFoundContainer />
        </Route>
        <Route path="*">
          <Redirect to={Routes.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
