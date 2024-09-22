/*¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, 
y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y
luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` 
para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje.
Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
(no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate,
solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números
(el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, 
luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje 
para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.*/

import * as readlineSync from 'readline-sync';

function calcularPuntaje(sabor: number, presentacion: number, dificultad: number): number {
    // Suma  de las puntuaciones de sabor, presentación y dificultad
    return sabor + presentacion + dificultad;
}

function determinarGanador():void{
    // Pido la cantidad de consursantes participando
    let numConcursantes : number = readlineSync.questionInt( "Ingrese la cantidad de concursantes: ");

    // Iniciazo variables que voy a necesitar
    let puntajeMaximo = 0;
    let iGanador = -1;// En -1 por posibles errores si inicializo en 0
    let cantidadGanadores = 0;
    let i = 0;

    // Recorrer todos los participantes
    while (i < numConcursantes) {
        console.log(`\nParticipante ${i + 1}`);

        // Pido las puntuaciones de sabor, presentación y dificultad
        const sabor: number = readlineSync.questionInt('Puntaje de Sabor: ');
        const presentacion: number = readlineSync.questionInt('Puntaje de Presentacion: ');
        const dificultad: number = readlineSync.questionInt('Puntaje de Dificultad: ');

        // Calculo el puntaje total de la torta del participante
        const puntajeTotal: number = calcularPuntaje(sabor, presentacion, dificultad);

        // Puntaje total es mayor al puntaje máximo actual
        if (puntajeTotal > puntajeMaximo) {
            puntajeMaximo = puntajeTotal;
            iGanador = i;
            cantidadGanadores = 1;
        } else if (puntajeTotal === puntajeMaximo) {
            // Si hay otro participante con el mismo puntaje máximo, se incrementa el contador de ganadores
            cantidadGanadores++;
        }
         // Incremento el contador para continuar con el siguiente participante
         i++;
    }
    // Si hay más de un ganador, es un empate
    if (cantidadGanadores > 1) {
        console.log("\n¡Se produjo un empate!");
    } else {
        // Si no, anunciamos al ganador
        console.log(`\nEl ganador es el participante ${iGanador + 1} con un puntaje de ${puntajeMaximo}.`);
    }
}
// Ejecutamos la función para iniciar el concurso
determinarGanador();