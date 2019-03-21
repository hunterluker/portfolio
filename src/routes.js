import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import About from './Components/About/About';

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
);
