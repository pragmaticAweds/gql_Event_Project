const Event = require("./event.model");

const User = require("../Users/user.model");

const { eventDataConverter } = require("./event.utilities");
const { UserInputError } = require("apollo-server-express");

module.exports.eventResolverTypes = {
  allEvents: async (_, args, { isLoggedIn }) => {
    if (!isLoggedIn) {
      throw Error("User must be logged in");
    }

    try {
      const events = await Event.find({});
      return events.map((event) => eventDataConverter(event));
    } catch (err) {
      throw new UserInputError(err.message);
    }
  },
};

module.exports.eventResolverMutationTypes = {
  addEvent: async (_, args, { isLoggedIn }) => {
    const {
      eventInput: { title, description, price },
    } = args;

    if (!isLoggedIn) {
      throw Error("User must be logged in");
    }

    try {
      const user = await User.findById(isLoggedIn._id);

      if (!user) {
        throw new Error("User not found");
      }

      const newEvent = new Event({
        title,
        description,
        price: +price,
        date: new Date().toISOString(),
        creator: user.id,
      });

      user.createdEvents.push(newEvent);
      await user.save();

      await newEvent.save();
      return eventDataConverter(newEvent);
    } catch (err) {
      throw new UserInputError(err.message);
    }
  },
};
