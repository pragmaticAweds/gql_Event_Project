const Event = require("./event.model");

const { consoleLog } = require("../../utils/helper-function");

const { eventDataConverter } = require("./event.utilities");

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
      newEvent = await new Event({
        title,
        description,
        price: +price,
        date: new Date().toISOString(),
      }).save();

      return eventDataConverter(newEvent);
    } catch (err) {
      consoleLog(err.message, true);
    }
  },
};
