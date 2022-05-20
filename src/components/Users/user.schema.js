const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    doSignUp(userInput: UserInput): User
  }
`;
