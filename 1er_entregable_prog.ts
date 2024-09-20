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

// Importamos la librería readline-sync para leer la entrada del usuario

// Función para calcular el puntaje total de una torta
// Función para calcular el puntaje total de una torta


function calcularPuntaje(sabor: number, presentacion: number, dificultad: number): number {
    // Suma las puntuaciones de sabor, presentación y dificultad
    return sabor + presentacion + dificultad;
}

// Función para determinar el ganador del concurso
function determinarGanador(): void {
    // Pedimos el número de participantes al usuario
    const numeroParticipantes: number = parseInt(prompt('¿Cuántos participantes hay? ') || '0');

    // Creamos un array para almacenar los puntajes de las tortas
    let puntajes: number[] = [];

    // Recorremos todos los participantes
    for (let i = 0; i < numeroParticipantes; i++) {
        console.log(`\nParticipante ${i + 1}`);

        // Solicitamos las puntuaciones de sabor, presentación y dificultad
        const sabor: number = parseInt(prompt('Puntaje de Sabor (1-5): ') || '0');
        const presentacion: number = parseInt(prompt('Puntaje de Presentación (1-5): ') || '0');
        const dificultad: number = parseInt(prompt('Puntaje de Dificultad (1-5): ') || '0');

        // Calculamos el puntaje total de la torta del participante
        const puntajeTotal: number = calcularPuntaje(sabor, presentacion, dificultad);

        // Almacenamos el puntaje total en el array de puntajes
        puntajes.push(puntajeTotal);
    }

    // Obtenemos el puntaje más alto
    const puntajeMaximo: number = Math.max(...puntajes);

    // Contamos cuántos participantes tienen el puntaje más alto
    const cantidadGanadores = puntajes.filter(puntaje => puntaje === puntajeMaximo).length;

    // Si hay más de un ganador, es un empate
    if (cantidadGanadores > 1) {
        console.log("\n¡Se produjo un empate!");
    } else {
        // De lo contrario, anunciamos al ganador
        const indiceGanador = puntajes.indexOf(puntajeMaximo);
        console.log(`\nEl ganador es el participante ${indiceGanador + 1} con un puntaje de ${puntajeMaximo}.`);
    }
}

// Ejecutamos la función para iniciar el concurso
determinarGanador();
