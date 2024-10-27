const paragraph: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

//devuelve la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
    //convertir a minusculas
    const lowerFullText = fullText.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    let count = 0;
    //buscar la primera aparicion
    let pos = lowerFullText.indexOf(lowerSearchTerm);
    //bucle para contar todas las apariciones
    while (pos !== -1) {
      count++;
      pos = lowerFullText.indexOf(lowerSearchTerm, pos + lowerSearchTerm.length);
    }
    return count;
}
function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

const searchTerm = "le";
const result = howManyTextInPara(paragraph, searchTerm);

console.log(`El término "${searchTerm}" aparece ${result} veces en el texto.`);