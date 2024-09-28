/* 3.
Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el 
  número es par o impar */

let numeros: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMasGrande: number = 0;

// Función para encontrar el número más grande del arreglo
function encontrarNumeroMasGrande(arr: number[]): number {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}

// Función para determinar si un número es par o impar
function esParONo(num: number): string {
    if(num%2===0){
        return 'par';
    }
    else{
        return 'impar';
    }
}

// Llamar a la función para encontrar el número más grande
numeroMasGrande = encontrarNumeroMasGrande(numeros);
console.log("El número más grande del arreglo es:", numeroMasGrande);

// Determinar si el número más grande es par o impar
let resultado = esParONo(numeroMasGrande);
console.log(`El número ${numeroMasGrande} es ${resultado}.`);
