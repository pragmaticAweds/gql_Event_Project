const { gql } = require("apollo-server");

module.exports = gql`
  type Event {
    id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
  }

  type Mutation {
    addEvent(eventInput: EventInput): Event!
  }
`;
