//2.
/* Dado un array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar si está
    en el arreglo. Imprimir el arreglo y si está o no en él.
*/import * as readlineSync from 'readline-sync';

let nombres: string[] = ["Carlos", "Ana", "Luis", "Sofía", "Maria"];

function verificarNombre() {
    // Pedir al usuario que ingrese un nombre
    let nombreIngresado: string = readlineSync.question("Ingrese un nombre:") || '';

    // Función de verificación y mostrar el resultado
    if (nombreEnArreglo(nombreIngresado, nombres)) {
        console.log(`El nombre "${nombreIngresado}" está en el arreglo.`);
    } else {
        console.log(`El nombre "${nombreIngresado}" NO está en el arreglo.`);
    }

    console.log("Nombres en el arreglo:", nombres);
}

// Función para verificar si un nombre está en el array
function nombreEnArreglo(nombre: string, arreglo: string[]): boolean {
    let encontrado = false;
    let i = 0;

    while (i < 5 && !encontrado) {
        if (arreglo[i] === nombre) {
            encontrado = true;  // Si encuentra el nombre, cambia a true
        }
        i++;
    }

    return encontrado;
}

// Llamar a la función
verificarNombre();
