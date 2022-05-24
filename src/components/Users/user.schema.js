const { gql } = require("apollo-server");
// const eventTypes = require("../Events/event.schema");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    createdEvents: [Event]
    password: String
  }
  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    doSignUp(userInput: UserInput!): User
  }
`;
