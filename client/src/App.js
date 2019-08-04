import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Jumbotron from './components/Jumbotron';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

const uri = 'http://localhost:3001/graphql';

const client = new ApolloClient({
  uri
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
