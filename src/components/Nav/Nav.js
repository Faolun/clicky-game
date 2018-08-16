
import React from "react";

const Nav = props => (
  
  <nav className = "navbar navbar-dark bg-dark">
  <div class="container">
  <a className ="navbar-brand" href="/clicky-game/">{props.title}</a>

      <span id="right-wrong">{props.rightWrong}</span>

      <span id="current-score">Current Score: {props.score}</span>

      <span id="top-score">Top Score: {props.topScore}</span>
  </div>
  </nav>
);

export default Nav;