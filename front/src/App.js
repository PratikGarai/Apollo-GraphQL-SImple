import './App.css';
import People from './pages/People/People';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
  cache : new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          Hello World
          <People />
      </div>
    </ApolloProvider>
  );
}

export default App;
