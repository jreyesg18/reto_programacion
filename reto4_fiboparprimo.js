/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

const readline = require("readline-sync");

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function esFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return num === b || num === 0;
}

function esPar(num) {
    return num % 2 === 0;
}

const numero = parseInt(readline.question("Introduce un numero: "), 10);
let resultado = `${numero} `;

resultado += esPrimo(numero) ? "es primo, " : "no es primo, ";
resultado += esFibonacci(numero) ? "es fibonacci, " : "no es fibonacci, ";
resultado += esPar(numero) ? "y es par" : "y es impar";

console.log(resultado);
