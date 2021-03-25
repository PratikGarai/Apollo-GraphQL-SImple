const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const PeopleAPI = require('./ApiService');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources : ()=> {
        peopleAPI : new PeopleAPI()
    }
});

server.listen().then(() => {
    console.log("Server is running!");
});