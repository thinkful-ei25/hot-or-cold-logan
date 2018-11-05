import React from 'react';
import './header.css';
import NavBar from './navbar.js';
export default function Header(props) {
  return (
    <header>
      <NavBar />
      <h1>HOT or COLD</h1>
    </header>
  );
}