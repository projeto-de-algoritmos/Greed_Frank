import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Frank from '../pages/Frank';
import MyWay from '../pages/MyWay';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Frank} />
    <Route path="/musicOne" component={MyWay} />
  </Switch>
);

export default Routes;
