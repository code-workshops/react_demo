/*
  Functional Components
  - Props as args
  - No internal state
  - No lifecycle methods

  Use functional as much as possible!
 */
import React from 'react';

function Header(props) {
  return (
    <div className="protestbg jumbotron">
      <h1 id="title">My Web App</h1>
      <h3 id="slogan">I can do what I like!</h3>
    </div>
  )
}

export default Header;
