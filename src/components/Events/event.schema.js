const { gql } = require("apollo-server");
const userType = require("../Users/user.schema");

module.exports = gql`
  type Event {
    id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
  }

  type Mutation {
    addEvent(eventInput: EventInput!): Event
  }
  ${userType}
`;
