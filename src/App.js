import React, { Component } from 'react';
import GoogleNews from './containers/GoogleNews'
import LoginPage from './containers/LoginPage'
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/user" component={GoogleNews} />
      </div>
    );
  }
}

export default App;
