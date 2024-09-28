/* 
Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
import * as readlineSync from 'readline-sync';

// Declarar dos arreglos de tamaño 6
let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let arregloSuma: number[] = new Array(6); // Arreglo para almacenar la suma

// Cargar los dos arreglos con números ingresados por el usuario
console.log('\ncargar los numeros para el arreglo 1');
for (let indice = 0; indice < 6; indice++) {
    arreglo1[indice] = readlineSync.questionInt(`Indique el numero para la posicion ${indice} del arreglo 1: `);
}
console.log('\ncargar los numeros para el arreglo 2');
for (let indice = 0; indice < 6; indice++) {
    arreglo2[indice] = readlineSync.questionInt(`Indique el numero para la posicion ${indice} del arreglo 2: `);
}


// Sumar los elementos de cada posición y guardarlos en el tercer arreglo
for (let indice = 0; indice < 6; indice++) {
    arregloSuma[indice] = arreglo1[indice] + arreglo2[indice];
}

// Imprimir los resultados
for (let indice = 0; indice < 6; indice++) {
    console.log(`La suma de la posición ${indice} es: ${arregloSuma[indice]}`);
}


