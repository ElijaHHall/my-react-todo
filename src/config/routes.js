import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainers from '../containers/TodosContainers';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodosContainers }/>
  </Switch>
)
