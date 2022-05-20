const { ApolloServer } = require("apollo-server");

const typeDefs = require("./components/component-schema");
const resolvers = require("./components/component-resolver");

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
