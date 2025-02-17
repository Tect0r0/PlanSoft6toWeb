import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <header className="app-header">
            <Link to="/">Dungeon</Link>
            <Link to="/add">Add</Link>
            <Link to="/list">List</Link>
        </header>
    </div>
  );
}
