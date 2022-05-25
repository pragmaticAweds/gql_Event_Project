const { Types, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    event: {
      type: Types.ObjectId,
      ref: "Event",
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Booking", bookingSchema);
