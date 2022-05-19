const bookType = require("./Bookings/booking.schema");
const eventType = require("./Events/event.schema");
const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    allBooks: [Book!]!
    findBook(id: ID): Book
    allEvents: [Event!]!
  }

  type Mutation {
    addEvent: Event!
  }
  ${bookType}
  ${eventType}
`;
