const crypto = require("crypto");
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

// pm2 start index.js -i 0
// it will set the number of child process to number of logical cores
