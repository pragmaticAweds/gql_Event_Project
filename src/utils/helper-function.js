const { environment } = require("./config");
const { hashSync } = require("bcryptjs");

module.exports.consoleLog = (msg, forced = false) => {
  if (forced === true) {
    console.log({ consoleLogData: msg });
  } else if (environment === "dev") {
    console.log({ consoleLogData: msg });
  }
};

module.exports.hashPassword = (password) => hashSync(password, 12);
