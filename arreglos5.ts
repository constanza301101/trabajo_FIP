/*Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero */
import * as rls from 'readline-sync';

// Pedir al usuario la dimension del arreglo
let dimensionArreglo: number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let arreglo: number[] = new Array(dimensionArreglo);

// Cargar el arreglo con los numeros ingresados por el usuario
for (let indice = 0; indice < dimensionArreglo; indice++) {
    arreglo[indice] = rls.questionInt(`Indique el numero que va en la posicion ${indice}: `);
}

// Mostrar los numeros del arreglo de manera normal (del primero al último)
console.log("\nNumeros del arreglo (del primero al último):");
for (let indice = 0; indice < dimensionArreglo; indice++) {
    console.log(arreglo[indice]);
}

// Mostrar los numeros del arreglo del ultimo al primero
console.log("\nNumeros del arreglo en orden inverso:");
for (let indice = dimensionArreglo - 1; indice >= 0; indice--) {
    console.log(arreglo[indice]);
}
