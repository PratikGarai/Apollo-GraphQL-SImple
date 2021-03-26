import './App.css';
import People from './pages/People/People';
import PeopleForm from './pages/PeopleForm/PeopleForm';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
  cache : new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <People />
            </Route> 
            <Route path="/form" exact>
              <PeopleForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
