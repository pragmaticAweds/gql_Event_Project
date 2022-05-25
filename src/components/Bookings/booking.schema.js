const { gql } = require("apollo-server");
const eventType = require("../Events/event.schema");
const userType = require("../Users/user.schema");

module.exports = gql`
  type Book {
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
  }
  ${eventType}
  ${userType}
`;
