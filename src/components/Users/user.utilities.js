module.exports.userDataConverter = (user) => {
  return { ...user._doc, id: user.id.toString(), password: null };
};
