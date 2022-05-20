const bookType = require("./Bookings/booking.schema");
const eventType = require("./Events/event.schema");
const { gql } = require("apollo-server");
const userType = require("./Users/user.schema");

module.exports = gql`
  type Query {
    allBooks: [Book!]!
    findBook(id: ID): Book
    allEvents: [Event!]!
    allUsers: [User!]
  }

  type Mutation {
    addEvent: Event!
  }
  ${bookType}
  ${eventType}
  ${userType}
`;
