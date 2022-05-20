const { consoleLog, hashPassword } = require("../../utils/helper-function");
const User = require("../Users/user.model");

const { userDataConverter } = require("../Users/user.utilities");

module.exports.authResolverMutationTypes = {
  doSignUp: async (_, args) => {
    const { userInput } = args;
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
