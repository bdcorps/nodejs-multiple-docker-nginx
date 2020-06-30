const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from the other side" });
});

app.listen(4000, "0.0.0.0", function () {
  console.log("The back end server is running on http://localhost:4000");
});
