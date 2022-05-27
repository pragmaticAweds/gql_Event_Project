const { dateToString } = require("../../utils/helper-function");
const { findingSingleEvent } = require("../Events/event.utilities");
const { findingUser } = require("../Users/user.utilities");

const bookingDataConverter = (data) => {
  return {
    ...data._doc,
    id: data.id,
    user: findingUser.bind(this, data.user),
    event: findingSingleEvent.bind(this, data.event),
    createdAt: dateToString(data.createdAt),
    updatedAt: dateToString(data.updatedAt),
  };
};

module.exports = { bookingDataConverter };
