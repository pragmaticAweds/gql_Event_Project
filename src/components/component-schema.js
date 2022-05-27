const eventType = require("./Events/event.schema");
const { gql } = require("apollo-server");
const usersSchema = require("../components/Users/user.schema");
const bookingSchema = require("../components/Bookings/booking.schema");
const authSchema = require("../components/Auth/auth.schema");

module.exports = gql`
  type Query {
    allEvents: [Event!]!
    allUsers: [User!]!
    allBookings: [Booking!]!
  }

  type Mutation {
    addEvent: Event!
    addBooking: Booking!
    doSignUp: User!
  }
  ${usersSchema}
  ${eventType}
  ${bookingSchema}
  ${authSchema}
`;
