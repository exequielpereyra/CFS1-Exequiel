import * as readlineSync from "readline-sync";

let numero1:number = readlineSync.questionInt("Ingrese el primer numero: ");
let numero2:number = readlineSync.questionInt("Ingrese el segundo numero: ");
let opcionMenu:number = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar: ");

function dibujarGuionesN (n:number) {
    let i:number;
    let linea:string = "";
    for (i=0; i <= n; i++){
        linea = linea + "-";
    };
    console.log(linea);
}

function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number {
    let resultado:number = 0;
    if (opcionMenu == 1){
        resultado = numero1 + numero2;
    } else if (opcionMenu == 2){
        resultado = numero1 - numero2;
    }return resultado;
}

let resultado = calcularResultado (numero1, numero2, opcionMenu);
dibujarGuionesN (40);
console.log("el resultado es: ",resultado);
dibujarGuionesN (40);