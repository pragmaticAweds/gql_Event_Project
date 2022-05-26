const { gql } = require("apollo-server");
const eventType = require("../Events/event.schema");
const userType = require("../Users/user.schema");

module.exports = gql`
  type Booking {
    id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    addBooking(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!) Event!
  }

  ${eventType}
  ${userType}
`;
