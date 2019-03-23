import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

export default (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
);
