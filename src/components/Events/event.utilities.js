const { findingUser } = require("../Users/user.utilities");

const eventDataConverter = (data) => {
  return {
    ...data._doc,
    id: data.id.toString(),
    date: data.date.toLocaleString(),
    creator: findingUser.bind(this, data.creator),
  };
};

module.exports = { eventDataConverter };
