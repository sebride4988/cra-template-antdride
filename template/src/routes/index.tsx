import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Error404 from './Error/404';
import { PATHNAME } from '../constants';

interface RoutesProps {}

type MergeProps = RoutesProps;

function Routes(props: MergeProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHNAME.home.path}>
          <HomePage />
        </Route>
        <Route exact path={PATHNAME.about.path}>
          <HomePage />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

Routes.defaultProps = {};

export default Routes;
