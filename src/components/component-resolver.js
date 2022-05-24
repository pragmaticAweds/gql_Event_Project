const bookResolver = require("./Bookings/booking.resolver");
const {
  eventResolverTypes,
  eventResolverMutationTypes,
} = require("./Events/event.resolver");
const { authResolverMutationTypes } = require("./Auth/auth.resolver");

const { userResolverTypes } = require("../components/Users/user.resolver");

module.exports = {
  Query: {
    ...eventResolverTypes,
    ...userResolverTypes,
  },

  Mutation: {
    ...authResolverMutationTypes,
    ...eventResolverMutationTypes,
  },
};
