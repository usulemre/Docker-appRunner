const express = require("express");
const app = express();
// app.use(express.static("public/"));

app.get("/", (req, res) => res.send("Hello World Version 2"));
app.listen(8080),
  function () {
    console.log("server listining at 8080 ");
  };
