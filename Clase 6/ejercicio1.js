"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Ingrese el primer numero: ");
var numero2 = readlineSync.questionInt("Ingrese el segundo numero: ");
var esMultiplo = function (numero1, numero2) {
    if (numero1 % numero2 == 0)
        return true;
    else {
        return false;
    }
};
if (esMultiplo(numero1, numero2) == true) {
    console.log(numero1 + " es multiplo de " + numero2);
}
else {
    console.log(numero1 + " no es multiplo de " + numero2);
}
