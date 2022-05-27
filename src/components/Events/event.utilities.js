const Event = require("./event.model");

const { findingUser } = require("../Users/user.utilities");
const { dateToString } = require("../../utils/helper-function");

const eventDataConverter = (data) => {
  return {
    ...data._doc,
    id: data.id.toString(),
    date: dateToString(data.date),
    creator: findingUser.bind(this, data.creator),
  };
};

const findingSingleEvent = async (eventId) => {
  try {
    const foundEvent = await Event.findById(eventId);
    return eventDataConverter(foundEvent);
  } catch (err) {
    throw err;
  }
};

module.exports = { eventDataConverter, findingSingleEvent };
