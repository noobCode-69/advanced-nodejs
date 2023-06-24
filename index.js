process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");

// Is the file begin executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed *again* but
  // in slave mode
  cluster.fork();
  cluster.fork();
} else {
  // I'm a child , Im going to act like a server

  const express = require("express");
  const PORT = 3000;
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there!");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast");
  });

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}

// Number of child process must be not more that the number of physical core
