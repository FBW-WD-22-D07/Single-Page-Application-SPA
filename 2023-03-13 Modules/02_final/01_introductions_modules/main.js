// // 📁 main.js
// const sayHi = require("./sayHi.js");

// console.log(sayHi); // function…
// sayHi("John"); // Hello, John!

// 📁 main.js
const admin = require("./admin.js");
require("./user.js"); // only run the code

console.log(admin.name); // Pete
