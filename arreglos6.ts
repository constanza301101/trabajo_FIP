/*Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay */

import * as rls from 'readline-sync';

// Pedir al usuario la dimension del arreglo
let dimensionArreglo: number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let arreglo: number[] = new Array(dimensionArreglo);

let cantidadPositivos: number = 0;
let cantidadNegativos: number = 0;
let cantidadCeros: number = 0;

// Cargar el arreglo con los numeros ingresados por el usuario
for (let indice = 0; indice < dimensionArreglo; indice++) {
    arreglo[indice] = rls.questionInt(`Indique el numero que va en la posicion ${indice}: `);

    // Contar positivos, negativos y ceros
    if (arreglo[indice] > 0) {
        cantidadPositivos++;
    } else if (arreglo[indice] < 0) {
        cantidadNegativos++;
    } else {
        cantidadCeros++;
    }
}


console.log("\nNumeros del arreglo (del primero al último):");
for (let indice = 0; indice < dimensionArreglo; indice++) {
    console.log(arreglo[indice]);
}

console.log(`\nCantidad de números positivos: ${cantidadPositivos}`);
console.log(`Cantidad de números negativos: ${cantidadNegativos}`);
console.log(`Cantidad de ceros: ${cantidadCeros}`);

