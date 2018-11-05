import React from 'react';
import './navbar.css';

export default function NavBar(props) {
  return (
    <nav className="nav-bar">
      <ul>
        <li id="what"><a href="#"> What?</a> </li>
        <li id="newgame"><a href="#"> New Game</a> </li>
      </ul>
    </nav>
  );
}

