const { environment } = require("./config");

module.exports.consoleLog = (msg, forced = false) => {
  if (forced === true) {
    console.log({ consoleLogData: msg });
  } else if (environment === "dev") {
    console.log({ consoleLogData: msg });
  }
};

exports.dateToString = (date) => new Date(date).toLocaleString();
