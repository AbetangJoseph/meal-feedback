import React from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import userRatings from '../pages/UserRatings';

import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/myratings" component={userRatings} />
  </Switch>
);

export default Routes;
