var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, "0.0.0.0", function() {
  console.log(
    "The front end server is running on http://localhost:3000"
  );
});
