/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

const readline = require("readline-sync");

function generarNumeroPseudoaleatorio(seed) {
    let num = seed;
    num = (num * 9301 + 49297) % 233280; // Algoritmo congruencial lineal
    return num % 101; // Escalar el resultado entre 0 y 100
}

const seed = new Date().getTime() % 100000;
const numeroAleatorio = generarNumeroPseudoaleatorio(seed);
console.log(`Número pseudoaleatorio generado: ${numeroAleatorio}`);
