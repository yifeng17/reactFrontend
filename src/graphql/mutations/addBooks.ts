// src/graphql/queries/getBooks.ts

import { gql } from '@apollo/client';

// export const ADD_BOOK = gql`
//   mutation AddBook($title: String!) {
//     addBook(title: $title) {
//       id,
//       title
//     }
//   }
// `;


export const ADD_BOOK = gql`
  mutation AddBook($title: BookInput!) {
    addBook(input: $title) {
      title
    }
  }
`;

