const eventType = require("./Events/event.schema");
const { gql } = require("apollo-server");
const usersSchema = require("../components/Users/user.schema");

module.exports = gql`
  type Query {
    allEvents: [Event!]!
    allUsers: [User!]!
  }

  type Mutation {
    addEvent: Event
  }
  ${usersSchema}
  ${eventType}
`;
