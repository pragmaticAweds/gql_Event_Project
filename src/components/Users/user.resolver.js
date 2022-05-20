const { userDataConverter } = require("./user.utilities");
const User = require("./user.model");

module.exports.userResolverTypes = {
  allUsers: async () => {
    return await (await User.find({})).map((user) => userDataConverter(user));
  },
};

// module.exports.userResolverMutationTypes = {
//   addUser: async (_, args) => {
//     const { userInput } = args;
//     let newUser;

//     try {
//       newUser = await new User({
//         ...userInput,
//         password: hashPassword(userInput.password),
//       }).save();
//       console.log({ newUser }, true);
//       return { ...newUser._doc, password: null, id: newUser._id };
//     } catch (err) {
//       consoleLog(err.message, true);
//     }
//   },
// };
