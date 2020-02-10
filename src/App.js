import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo'

import { client } from './servieces/ApolloClient'

import List from './container/List'
import Character from './container/Character'

import './App.css';

function Router(props) {
  switch(props.route) {
    case 'list':
      return <List {...props}/>
    case 'character':
      return <Character {...props} goBack={() => props.setRoute("list")}/>
    default:
      return <List {...props} />
  
    }
}

function App() {
  const [route, setRoute] = useState('list')
  const [characterId, setCharacterId] = useState('')
  return (
    <ApolloProvider client={client}>
    {Router({route, characterId, setRoute, setCharacterId})}
    </ApolloProvider>
  );
}

export default App;
