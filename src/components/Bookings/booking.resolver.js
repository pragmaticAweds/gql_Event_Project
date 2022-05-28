const Booking = require("./booking.model");
const Event = require("../Events/event.model");

const { bookingDataConverter } = require("./booking.utils");
const { findingSingleEvent } = require("../Events/event.utilities");

module.exports.bookingResolverType = {
  allBookings: async (_, args, { isLoggedIn }) => {
    if (!isLoggedIn) {
      throw Error("Authentication is required");
    }
    try {
      const bookings = await Booking.find({});
      return bookings.map((booking) => bookingDataConverter(booking));
    } catch (err) {
      throw err;
    }
  },
};

module.exports.bookingMutationResolverType = {
  addBooking: async (_, args, { isLoggedIn }) => {
    if (!isLoggedIn) {
      throw Error("Authentication is required");
    }
    const findEvent = await Event.findById({ _id: args.eventId });
    try {
      const newBooking = new Booking({
        user: isLoggedIn._id,
        event: findEvent,
      });

      await newBooking.save();

      return bookingDataConverter(newBooking);
    } catch (err) {
      throw err;
    }
  },
  cancelBooking: async (_, args, { isLoggedIn }) => {
    if (!isLoggedIn) {
      throw Error("Authentication is required");
    }
    try {
      const foundBooking = await Booking.findById(args.bookingId);
      const event = findingSingleEvent(foundBooking.event);
      await Booking.deleteOne({ id: foundBooking.id });
      return event;
    } catch (err) {
      throw err;
    }
  },
};
