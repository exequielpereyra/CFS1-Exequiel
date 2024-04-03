import * as readlineSync from "readline-sync";

let N:number = readlineSync.questionInt("Ingrese la cantidad de numeros: ");
let Arreglo:number[] = new Array (N);
let i:number = 0;
let numerosPositivos:number = 0;
let numerosNegativos:number = 0;
let totalCeros = 0;
for (i=0;i<N;i++){
    Arreglo[i]=readlineSync.questionInt("Ingrese un numero: ");
}
for (i=0;i<N;i++){
    if(Arreglo[i]>0){
        numerosPositivos++;
    }
    if(Arreglo[i]<0){
        numerosNegativos++;
    }
    if(Arreglo[i]=0){
        totalCeros++;
    }
}
console.log("La cantidad de números positivos es: " + numerosPositivos);
console.log("La cantidad de números negativos es: " + numerosNegativos);
console.log("La cantidad de ceros es: " + totalCeros);