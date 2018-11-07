import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar(props) {
  let register;
  // if (!props.isAuthenticated) {
    register = <li>
      <Link to="/signup">
        <span className="glyphicon glyphicon-pencil"> Sign-up</span>
      </Link>
    </li>;
  // }

  return (
    <nav role="navigation" className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target="#earfulNav"
                  aria-expanded="false" aria-controls="navbar"
                  className="navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/" className="navbar-brand">App Demo</a>
        </div>
        <div id="pitchforksNav" className="collapse navbar-collapse">
          <ul className="navbar-nav nav">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <form name="search" method="GET" action="/results" className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" name="search" className="form-control" />
                <span>
                  <button type="submit" className="btn btn-default">Search</button>
                </span>
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">

            { props.isAuthenticated ?
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                :
                <li>
                  <Link to="/login">
                    <span className="glyphicon glyphicon-log-in"> Login</span>
                  </Link>
                </li>
            }
            { register }
            <li>
              <a href="/auth/twitter">
                <img src="/img/sign-in-with-twitter-l.png" alt="twitter sign-in logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;