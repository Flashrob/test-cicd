const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!!!");
});
//hello world

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
