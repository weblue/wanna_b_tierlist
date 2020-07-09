'use strict';

const fs = require('fs');

let rawList = fs.readFileSync('./src/assets/thelist.json');

let tierlist = JSON.parse(rawList);

console.log("Correctly parsed tierlist" + tierlist.version);