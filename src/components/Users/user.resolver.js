const { userDataConverter } = require("./user.utilities");
const User = require("./user.model");

module.exports.userResolverTypes = {
  allUsers: async () => {
    return (await User.find({})).map((user) => userDataConverter(user));
  },
};
