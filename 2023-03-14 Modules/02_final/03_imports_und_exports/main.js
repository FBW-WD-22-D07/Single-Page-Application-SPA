// // In main.js
// import greet from "./module.js";
// greet(); // Hello

// // In main.js
// import * as math from "./module.js";
// console.log(math.PI); // 3.14
// console.log(math.add(2, 3)); // 5

// In main.js
import { add as sum, PI as pi } from "./module.js";
console.log(pi); // 3.14
console.log(sum(2, 3)); // 5
