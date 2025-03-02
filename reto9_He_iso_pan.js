/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */

function esHeterograma(texto) {
    const letras = new Set();
    for (const letra of texto.toLowerCase().replace(/[^a-z]/g, '')) {
        if (letras.has(letra)) return false;
        letras.add(letra);
    }
    return true;
}

function esIsograma(texto) {
    const frecuencia = {};
    for (const letra of texto.toLowerCase().replace(/[^a-z]/g, '')) {
        frecuencia[letra] = (frecuencia[letra] || 0) + 1;
    }
    const valores = new Set(Object.values(frecuencia));
    return valores.size === 1;
}

function esPangrama(texto) {
    const alfabeto = new Set('abcdefghijklmnopqrstuvwxyz');
    for (const letra of texto.toLowerCase()) {
        alfabeto.delete(letra);
        if (alfabeto.size === 0) return true;
    }
    return false;
}

const texto = readline.question("Introduce un texto: ");
console.log(`Es heterograma: ${esHeterograma(texto)}`);
console.log(`Es isograma: ${esIsograma(texto)}`);
console.log(`Es pangrama: ${esPangrama(texto)}`);
