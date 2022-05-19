const bookResolver = require("./Bookings/booking.resolver");
const {
  eventResolverTypes,
  eventResolverMutationTypes,
} = require("./Events/event.resolver");

module.exports = {
  Query: {
    ...bookResolver,
    ...eventResolverTypes,
  },

  Mutation: {
    ...eventResolverMutationTypes,
  },
};
