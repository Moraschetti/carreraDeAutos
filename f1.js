let readlineSync = require("readline-sync");
let v1 = readlineSync.questionInt("vuelta 1 en seg: ");
let v2 = readlineSync.questionInt("vuelta 2 en seg: ");
let v3 = readlineSync.questionInt("vuelta 3 en seg: ");
let v4 = readlineSync.questionInt("vuelta 4 en seg: ");

let vTotal = v1 + v2 + v3 + v4;
console.log("Vuelta total en seg: " + vTotal + " segundos");

let vPromedio = vTotal / 4;
console.log("Promedio por vuelta en seg: " + vPromedio + " segundos");

