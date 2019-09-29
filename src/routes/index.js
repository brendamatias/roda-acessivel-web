import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Location from '../pages/Location';
import Category from '../pages/Category';
import Evaluation from '../pages/Evaluation';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/dashboard/:category" component={Category} isPrivate />
      <Route path="/location/:location" component={Location} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/evaluation/:location" component={Evaluation} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
