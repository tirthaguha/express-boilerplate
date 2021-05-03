var express = require("express");
var app = express();

var port = 8000;
var ip = "127.0.0.1";

require("dns").lookup(require("os").hostname(), function (err, add, fam) {
  ip = add;
  app.listen(port, function () {
    console.log("Running on http://" + ip + ":" + port);
  });
});
