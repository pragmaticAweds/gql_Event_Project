const User = require("../Users/user.model");
const { decodeToken } = require("./auth.utils");

exports.validateAuth = async (req) => {
  try {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = await decodeToken(auth.substring(7));
      const isLoggedIn = await User.findById(decodedToken.userId);
      return { isLoggedIn };
    }
  } catch (err) {
    return err;
  }
};
