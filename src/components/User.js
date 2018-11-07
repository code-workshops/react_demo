/*
  Functional Components
  - Props as args
  - No internal state
  - No lifecycle methods

  Use functional as much as possible!
 */
import React from 'react';

const user = (props) => {
  // Props children refers to the content between elements such as text or other elements
  return (
    <div>
      <p>This is user { props.name } a random ID: { props.age }</p>
      <p>{ props.children }</p>
    </div>
  )
};

export default user;