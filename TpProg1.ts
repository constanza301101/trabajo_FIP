import * as readlineSync from 'readline-sync';

function calcularPuntaje(sabor: number, presentacion: number, dificultad: number): number {
    // Suma  de las puntuaciones de sabor, presentación y dificultad
    return sabor + presentacion + dificultad;
}

// Función para validar que el valor esté entre 1 y 5
function data_entry(pregunta: string): number {
    let valor: number = readlineSync.questionInt(pregunta);
    while (valor < 1 || valor > 5) {
        console.log('El valor debe estar entre 1 y 5.');
        valor = readlineSync.questionInt(pregunta);
    }
    return valor;
}
function determinarGanador():void{
    // Pido la cantidad de consursantes participando
    let numConcursantes : number = readlineSync.questionInt( "Ingrese la cantidad de concursantes: ");
    //bucle por si el numero de participantes que ingresa el usuario es 0 o menor, hasta que no complete con un numero
    //menor a 0 no sigue con el programa
    while (numConcursantes <= 0) {
        console.log("El número de participantes debe ser mayor a 0. Por favor, inténtalo de nuevo.");
        numConcursantes = readlineSync.questionInt( "Ingrese la cantidad de concursantes: ");
    }

    // Iniciazo variables que voy a necesitar
    let puntajeMaximo = 0;
    let iGanador = -1;// En -1 por posibles errores si inicializo en 0
    let cantidadGanadores = 0;
    let i = 0;
    // Recorrer todos los participantes
    for (let i = 0; i < numConcursantes; i++) {

        console.log(`\nParticipante ${i + 1}`);

        // Usamos la función data_entry para validar que el puntaje esté entre 1 y 5
        const sabor: number = data_entry('Puntaje de Sabor (1-5): ');
        const presentacion: number = data_entry('Puntaje de Presentacion (1-5): ');
        const dificultad: number = data_entry('Puntaje de Dificultad (1-5): ');

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