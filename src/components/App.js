/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Search from '../containers/SearchContainer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Artist from './Artist';
import Lyrics from './Lyrics';
import 'normalize.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/artist/:id" component={Artist} />
          <Route exact path="/work/:artist/:work" component={Lyrics} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
