import * as readlineSync from "readline-sync";

let numero1:number = readlineSync.questionInt("Ingrese el primer numero: ");
let numero2:number = readlineSync.questionInt("Ingrese el segundo numero: ");

const esMultiplo = (numero1, numero2):boolean => {
    if (numero1 % numero2 == 0)
    return true;
    
else 
    {
    return false;
    }
}

if (esMultiplo(numero1,numero2) == true) {
    console.log(numero1 + " es multiplo de " + numero2 );
}else {
    console.log(numero1 + " no es multiplo de " + numero2);
}

