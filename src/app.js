const { ApolloServer } = require("apollo-server");

const typeDefs = require("./components/component-schema");
const resolvers = require("./components/component-resolver");
const { decodeToken } = require("./components/Auth/auth.utils");

const User = require("./components/Users/user.model");
const { consoleLog } = require("./utils/helper-function");
const { validateToken } = require("./components/Auth/auth.middleware");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return validateToken(req);
  },
});

module.exports = server;
