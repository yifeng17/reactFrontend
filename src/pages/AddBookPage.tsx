// src/pages/AddBookPage.tsx
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_BOOK } from '../graphql/mutations/addBooks';

interface BookInput {
  title: string;
  // Uncomment the line below if you also want to include the author
  // author: string;
}

const AddBookPage: React.FC = () => {
  const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const [addBook, { data }] = useMutation(ADD_BOOK);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bookInput: BookInput = { title };

    addBook({ variables: { title: bookInput } });
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
      <button type="submit">Add Book</button>
      {data && <p>Book added: {data.addBook.title}</p>}
    </form>
  );
}

export default AddBookPage;
