const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
      title : String!,
      author : String!
  }

  type Person {
        name : String,
        age : Int
  }

  type PersonAddResponse {
      success : Boolean!,
      message : String!
  }

  type Query {
      books : [Book]!
      people : [Person]
  }

  type Mutation{
      addPerson(name: String!, age: Int!): PersonAddResponse!
  }
`;

module.exports = typeDefs;