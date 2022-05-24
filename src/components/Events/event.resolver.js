const Event = require("./event.model");

const { consoleLog } = require("../../utils/helper-function");
const User = require("../Users/user.model");

const { eventDataConverter } = require("./event.utilities");
const { UserInputError } = require("apollo-server-express");

module.exports.eventResolverTypes = {
  allEvents: async () => {
    return (await Event.find({})).map((event) => eventDataConverter(event));
  },
};

module.exports.eventResolverMutationTypes = {
  addEvent: async (_, args) => {
    const {
      eventInput: { title, description, price },
    } = args;
    let newEvent;

    try {
      const user = await User.findById("628d36e8758e3d1b8b72ade5");

      if (!user) {
        throw new Error("User not found");
      }

      newEvent = new Event({
        title,
        description,
        price: +price,
        date: new Date().toISOString(),
        creator: "628d36e8758e3d1b8b72ade5",
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
