const fs = require("fs");
JSON.parse(fs.readFileSync(".eslintrc.json", "utf8"));
console.log("lint config ok");
