"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Ingrese el primer numero: ");
var numero2 = readlineSync.questionInt("Ingrese el segundo numero: ");
var opcionMenu = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar: ");
function dibujarGuionesN(n) {
    var i;
    var linea = "";
    for (i = 0; i <= n; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
var resultado = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuionesN(40);
console.log("el resultado es: ", resultado);
dibujarGuionesN(40);
