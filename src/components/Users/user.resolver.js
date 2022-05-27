const { userDataConverter } = require("./user.utilities");
const User = require("./user.model");

module.exports.userResolverTypes = {
  allUsers: async (_, args, { isLoggedIn }) => {
    if (!isLoggedIn) {
      throw Error("User must be logged in");
    }
    try {
      const users = await User.find({});
      return users.map((user) => userDataConverter(user));
    } catch (err) {
      throw err;
    }
  },
};
