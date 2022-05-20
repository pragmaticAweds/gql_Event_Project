module.exports.eventDataConverter = (data) => {
  return {
    ...data._doc,
    id: data.id.toString(),
    date: data.date.toLocaleString(),
  };
};
