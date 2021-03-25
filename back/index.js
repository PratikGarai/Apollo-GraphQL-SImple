const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const PeopleAPI = require('./ApiService.js');

const server = new ApolloServer({ 
    typeDefs,
    dataSources : ()=> ({
        peopleAPI : new PeopleAPI()
    }) 
});

server.listen().then(() => {
    console.log("Server is running!");
});