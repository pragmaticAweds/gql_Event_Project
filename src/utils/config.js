require("dotenv").config();

const { env } = require("process");

module.exports.DB_URI = env.uri;
module.exports.environment = env.NODE_ENV || "env";
module.exports.privateKey = env.secret_key;
