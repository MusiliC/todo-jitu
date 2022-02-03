import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>The To do List App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create new Todo</Link>
      </div>
    </nav>
  );
}
