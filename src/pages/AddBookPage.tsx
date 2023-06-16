// src/pages/AddBookPage.tsx
import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_BOOK } from '../graphql/mutations/addBooks';

const AddBookPage: React.FC = () => {
  const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [addBook, { data }] = useMutation(ADD_BOOK);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addBook({ variables: { title: title } });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Book</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      {/* <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        type="text"
        placeholder="Author"
      /> */}
      <button type="submit">Add Book</button>
      {data && <p>Book added with id: {data.addBook.id}</p>}
    </form>
  );
}

export default AddBookPage;
