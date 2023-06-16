// import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries/getBooks';

const BooksPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>

  return (
    <div>
      <h1>Books</h1>
      {data.books.map(({ id, title }: { id: string, title: string }) => (
        <div key={id}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default BooksPage;


