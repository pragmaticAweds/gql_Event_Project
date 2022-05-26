const Booking = require("./booking.model");

module.exports = {
  allBookingss: async () => {
    let bookings;
    try {
      bookings = await Booking.find({});
    } catch (err) {
      throw err;
    }
    return bookings.map((booking) => {
      return {
        ...booking._doc,
        id: booking.id.toString(),
        createdAt: booking.createdAt.toLocaleString(),
        updatedAt: booking.updatedAt.toLocalString(),
      };
    });
  },
};
