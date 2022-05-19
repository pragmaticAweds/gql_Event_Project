const mongoose = require("mongoose");
const server = require("./app");

// mongoose.connect();
// console.log();

server
  .listen()
  .then(({ port }) => console.log(`server running on PORT :::> ${port}`));
