const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const PeopleAPI = require('./ApiService');
const resolvers = require('./resolvers');

// For checking datasource
// const l = async () => {
// const a = new PeopleAPI();
// const b = await a.getAllPeople();
// console.log("main : ", b);
// }
// l();

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources : ()=> ({
        p : new PeopleAPI()
    })
});

server.listen().then(({url}) => {
    console.log("Server is running: ", url);
});