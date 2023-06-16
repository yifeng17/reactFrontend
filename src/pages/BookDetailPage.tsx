// src/pages/BookDetailPage.tsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // Here we will call the query to fetch the book details by id
  }, [id]);

  return (
    <div>
      <h1>Book Detail</h1>
      {/* Here we will render the book details */}
    </div>
  );
}

export default BookDetailPage;
