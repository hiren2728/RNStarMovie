/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ApolloProvider } from "@apollo/client"

import { client } from "./app/api/ApoloClient"
import RootNavigation from "./app/navigation/RootNavigation";

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <RootNavigation/>
    </ApolloProvider>
  );
}

export default App;
