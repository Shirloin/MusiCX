import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import Template from './pages/Template';
import Home from './pages/Home';
import { SearchProvider } from './context/SearchContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { SongProvider } from './context/SongContext';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8080/query',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <SongProvider>
        <SearchProvider>
          <FavoriteProvider>
            <Template/>
          </FavoriteProvider>
        </SearchProvider>
      </SongProvider>
    </ApolloProvider>
  );
}

export default App;
