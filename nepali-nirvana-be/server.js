require("dotenv").config();
const http = require("http");

const app = require("./app");
const config = require("./services/config");
const { connectToDB } = require("./services/mongodb");

const PORT = config.PORT || 8000;

const server = http.createServer(app);

const startServer = async function () {
  try {
    await connectToDB();
  } catch (err) {
    console.error(`Database connection failed ${err}`);
  }

  server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:8000`);
  });
};

startServer();
