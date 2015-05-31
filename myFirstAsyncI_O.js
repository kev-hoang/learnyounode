var fs = require('fs');

function callback(err,data) {
  var arr = data.split("\n");
  console.log(arr.length - 1);
}

fs.readFile(process.argv[2], "utf8", callback)
