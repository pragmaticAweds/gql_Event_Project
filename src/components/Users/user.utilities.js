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
  let foundUser;
  try {
    foundUser = await User.findById(userId);
  } catch (err) {
    throw err;
  }

  return userDataConverter(foundUser);
};

const findingEvents = async (eventIds) => {
  let foundEvents;
  try {
    foundEvents = await Event.find({ _id: { $in: eventIds } });
  } catch (err) {
    throw err;
  }

  return foundEvents.map((event) => {
    return {
      ...event._doc,
      id: event.id.toString(),
      date: event.date.toLocaleString(),
      creator: findingUser.bind(this, event.creator),
    };
  });
};

module.exports = { userDataConverter, findingUser, findingEvents };
