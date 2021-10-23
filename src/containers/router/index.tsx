import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from 'common';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.ROOT} exact></Route>
        <Route path={Routes.ALL} exact></Route>
        <Route path={Routes.ONE} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
