const User = require("./user.model");
const Event = require("../Events/event.model");

const userDataConverter = (user) => {
  return {
    ...user._doc,
    id: user.id.toString(),
    password: null,
    createdEvents: findingEvents.bind(this, user.createdEvents),
  };
};

const findingUser = async (userId) => {
  try {
    const foundUser = await User.findById(userId);
    return userDataConverter(foundUser);
  } catch (err) {
    throw err;
  }
};

const findingEvents = async (eventIds) => {
  try {
    const foundEvents = await Event.find({ _id: { $in: eventIds } });

    return foundEvents.map((event) => {
      return {
        ...event._doc,
        id: event.id.toString(),
        date: event.date.toLocaleString(),
        creator: findingUser.bind(this, event.creator),
      };
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { userDataConverter, findingUser, findingEvents };
