const User = require("./user.model");
const Event = require("../Events/event.model");

const findingUser = async (userId) => {
  const foundUser = await User.findById(userId);
  return userDataConverter(foundUser);
};

const findingEvents = async (eventIds) => {
  return (await Event.find({ _id: { $in: eventIds } })).map((event) => {
    return {
      ...event._doc,
      id: event.id.toString(),
      date: event.date.toLocaleString(),
      creator: findingUser.bind(this, event.creator),
    };
  });
};

const userDataConverter = (user) => {
  return {
    ...user._doc,
    id: user.id.toString(),
    password: null,
    createdEvents: findingEvents.bind(this, user.createdEvents),
  };
};

module.exports = { userDataConverter, findingUser, findingEvents };
