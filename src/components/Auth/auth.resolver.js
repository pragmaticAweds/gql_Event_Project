const { UserInputError } = require("apollo-server-express");
const { hashPassword, verifyPassword, generateToken } = require("./auth.utils");
const User = require("../Users/user.model");

const { userDataConverter } = require("../Users/user.utilities");
const { consoleLog } = require("../../utils/helper-function");
const { validateSignUp, validateLogin } = require("./auth.policies");

module.exports.authResolverMutationType = {
  doSignUp: async (_, args) => {
    const { userInput } = args;

    const { error } = validateSignUp(userInput);

    if (error) {
      throw new UserInputError(error.message);
    }

    const existingUser = await User.findOne({ email: userInput.email });

    if (existingUser) {
      throw new Error("This user already exist");
    }

    try {
      const newUser = await new User({
        ...userInput,
        password: hashPassword(userInput.password),
      }).save();
      return userDataConverter(newUser);
    } catch (err) {
      consoleLog(err, true);
      throw err;
    }
  },

  doLogin: async (_, { email, password }) => {
    const { error } = validateLogin({ email, password });

    if (error) {
      throw new UserInputError(error.message);
    }
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("User does not exist");
      }

      const verifiedUser = await verifyPassword(password, user.password);

      if (!verifiedUser) {
        throw new Error("Invalid Credentials");
      }

      const token = await generateToken(
        { userId: user.id, email: user.email },
        "10h"
      );

      return { userId: user.id, token, tokenExpires: 10 };
    } catch (err) {
      throw err.message;
    }
  },
};
