const mongoose = require("mongoose");
const server = require("./app");
const { DB_URI } = require("./utils/config");

mongoose
  .connect(DB_URI)
  .then(() => console.log(`connected to server successfully`));

server
  .listen()
  .then(({ port }) => console.log(`server running on PORT => ${port}`));
