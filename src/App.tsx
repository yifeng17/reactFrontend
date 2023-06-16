// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Header from './components/header';
// import BookDetailPage from './pages/BookDetailPage';
import AddBookPage from './pages/AddBookPage';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/books/:id" element={<BookDetailPage />} /> */}
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
