const { UserInputError } = require("apollo-server-express");
const { consoleLog, hashPassword } = require("../../utils/helper-function");
const User = require("../Users/user.model");

const { userDataConverter } = require("../Users/user.utilities");

module.exports.authResolverMutationTypes = {
  doSignUp: async (_, args) => {
    const { userInput } = args;

    const existingUser = await User.findOne({ email: userInput.email });

    if (existingUser) {
      throw new UserInputError("This user already exist");
    }

    let newUser;

    try {
      newUser = await new User({
        ...userInput,
        password: hashPassword(userInput.password),
      }).save();
      return userDataConverter(newUser);
    } catch (err) {
      consoleLog(err.message, true);
    }
  },
};
