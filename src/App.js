import React, { Component } from 'react';
import GoogleNews from './containers/GoogleNews'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>
        <div>
          < GoogleNews />
        </div>
      </div>
    );
  }
}

export default App;
