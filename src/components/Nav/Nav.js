
import React from "react";

const Nav = props => (
  <nav>
    <ul>
      <li>
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="right-wrong">{props.rightWrong}</li>

      <li id="current-score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;