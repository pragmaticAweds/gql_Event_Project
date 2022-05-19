const events = [
  {
    id: "400382",
    title: "Shawama Night",
    description: "fun, coool and exciting",
    price: 99.9,
    date: "Thu May 19 2022",
  },
];

module.exports.eventResolverTypes = {
  allEvents: () => events,
};

module.exports.eventResolverMutationTypes = {
  addEvent: (_, args) => {
    const {
      eventInput: { title, description, price },
    } = args;
    const id = Math.random().toString().substring(2, 8);
    const newDate = new Date().toDateString();

    const newEvent = {
      id,
      title,
      description,
      price: +price,
      date: newDate,
    };
    console.log({ newEvent });
    events.push(newEvent);
    return newEvent;
  },
};
