import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Success from './Components/Success/Success';

export default (
  <Switch>
    <Route path="/success" component={Success} />
    <Route path="/skills" component={Skills} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
);
