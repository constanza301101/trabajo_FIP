import * as readlineSync from 'readline-sync';
//primera parte
console.log("vamos a calcular:");
console.log("------------------");
console.log(10*3);

//segunda parte

let base : number = readlineSync.questionInt( "Ingrese la base: ");
let altura : number = readlineSync.questionInt( "Ingrese la altura: ");


let area : number = base * altura;
console.log("El área es: ", area);
