const { gql } = require("apollo-server");

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }
`;
