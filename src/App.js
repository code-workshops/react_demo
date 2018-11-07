import React, { Component } from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import User from './components/User';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AuthService from './components/auth';
import Login from './components/Login';
import Signup from './components/Signup';

const auth = new AuthService();

// https://www.sitepoint.com/react-router-v4-complete-guide/
const AuthRoute = ({ component: Component, isAuthorized}) => {
  return (
    <Route render={(props) => isAuthorized ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>} />
  )
};


class App extends Component {
  // Class properties
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthorized: false
    };

    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    this.setState({ isAuthenticated: auth.isAuthenticated, isAuthorized: auth.isAuthorized })
  }

  // Every component needs to render HTML to the DOM. No exceptions
  render() {
    // This is JSX
    return (
      <div className="App container">
        <Navbar />
        <Header />

        <Switch>
          { /* <Route path="/about" component={ About } /> */ }
          { /* Create a custom route that will check this.state.isAuthorized */ }
          <AuthRoute path="/profile" component={ User } />
          <Route path="/login" render={ (props) => <Login authenticate={ auth.login } /> } />
          <Route path="/signup" render={ (props) => <Signup register={ auth.signup } /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
