const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Home Page");
});
app.get("/about", (request, response) => {
  resopnse.send("About Page");
});

module.exports = app;
