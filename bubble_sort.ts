//EJERCICIO ENTREGABLE – 28/
//implementete un algoritmo de ordenamiento con el método Bubble Sort, 
//para que ordene un arreglo de longitud N en orden descendente.
//(burbujeo)

function bubbleSortDescendente(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            //comparacion y cambio de lugar si el actual es menor que el siguiente
            if (arr[j] < arr[j + 1]) {
                //intercambio de elementos
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
}

let arr = [5, 39, 88, 4, 22, 6, 76, 34, 65, 12, 7];
console.log("arrglo sin ordenar:" ,arr);
//imprimo el arreglo ordenado
console.log("arreglo ordenado:", bubbleSortDescendente(arr));
