const bookResolver = require("./Bookings/booking.resolver");
const { eventResolverTypes } = require("./Events/event.resolver");
const { authResolverMutationTypes } = require("./Auth/auth.resolver");

const { userResolverTypes } = require("../components/Users/user.resolver");

module.exports = {
  Query: {
    ...bookResolver,
    ...eventResolverTypes,
    ...userResolverTypes,
  },

  Mutation: {
    ...authResolverMutationTypes,
  },
};
