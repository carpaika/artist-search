import React, { Component } from 'react';
import Search from './Search';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Artist from './Artist';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/artist/:id" component={Artist} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
