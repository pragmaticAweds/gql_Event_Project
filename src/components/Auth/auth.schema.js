const { gql } = require("Apollo-server");
const userSchemaType = require("../Users/user.schema");

module.exports = gql`
  type AuthData {
    userId: ID!
    token: String!
    tokenExpires: Int!
  }
  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  type Mutation {
    doSignUp(userInput: UserInput!): User!
    doLogin(email: String!, password: String!): AuthData!
  }
  ${userSchemaType}
`;
