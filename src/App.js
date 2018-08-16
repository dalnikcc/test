import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Tags from './containers/Tags/Tags'
import Tag from './containers/Tag/Tag'
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Tags} />
        <Route path="/:tagId" component={Tag} /> 
      </Switch>
    );
  }
}

export default App;