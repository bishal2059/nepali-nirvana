require("dotenv").config();
const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const startServer = async function () {
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:8000`);
  });
};

startServer();
