import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://localhost:5001/graphql/',  // replace with your GraphQL server URI
  cache: new InMemoryCache()
});


const root = document.getElementById('root');

if (root !== null) {
  const appRoot = ReactDOM.createRoot(root);
  appRoot.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
}


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
