const {
  bookingResolverType,
  bookingMutationResolverType,
} = require("./Bookings/booking.resolver");
const {
  eventResolverTypes,
  eventResolverMutationTypes,
} = require("./Events/event.resolver");
const { authResolverMutationType } = require("./Auth/auth.resolver");

const { userResolverTypes } = require("../components/Users/user.resolver");

module.exports = {
  Query: {
    ...eventResolverTypes,
    ...userResolverTypes,
    ...bookingResolverType,
  },

  Mutation: {
    ...authResolverMutationType,
    ...eventResolverMutationTypes,
    ...bookingMutationResolverType,
  },
};
