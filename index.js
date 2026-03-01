const express = require("express");
const app = express();
const port = 3000;

const posts = require("./postsData");

app.get("/", (req, res) => {
  const responseData = {
    message: "Server del mio blog",
    success: true,
  };
  res.status(200).json(responseData);
});

// Avvio Server
app.listen(port, () => {
  console.log("Server avviato");
});
