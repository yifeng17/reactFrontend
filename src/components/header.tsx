// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/books/:id">Book</Link></li>

      </nav>
    </header>
  );
}

export default Header;
