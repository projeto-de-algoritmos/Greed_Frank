import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Frank from '../pages/Frank';
import MyWay from '../pages/MyWay';
import NewYork from '../pages/NewYork';
import StrangersInTheNight from '../pages/StrangersInTheNight';
import AllTheWay from '../pages/AllTheWay';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Frank} />
    <Route path="/musicOne" component={MyWay} />
    <Route path="/musicTwo" component={NewYork} />
    <Route path="/musicThree" component={StrangersInTheNight} />
    <Route path="/musicFour" component={AllTheWay} />
  </Switch>
);

export default Routes;
