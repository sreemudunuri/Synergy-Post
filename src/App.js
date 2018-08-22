import React, { Component } from 'react';
import GoogleNews from './containers/GoogleNews'
import LoginPage from './containers/LoginPage'
import SignUp from './containers/SignUp'
import './App.css';
import { Route } from 'react-router-dom';
import BookmarkAdapter from './api/BookmarkAdapter';

class App extends Component {


  render() {
    console.log(BookmarkAdapter.isLoggedIn())
    return (
      <div className="App">
        {
            !BookmarkAdapter.isLoggedIn() ?
              <React.Fragment>
                <Route exact path="/" render={(routerProps) => <LoginPage {...routerProps}/>} />

                <Route exact path="/register" render={(routerProps) => <SignUp {...routerProps}/>} />
              </React.Fragment>

              :
              <React.Fragment>
                <Route exact path="/news" render={(routerProps) => <GoogleNews {...routerProps}/>} />
              </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
