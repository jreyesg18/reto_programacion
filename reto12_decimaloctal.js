/*
 * Crea una función que reciba un número decimal y lo trasforme a Octal
 * y Hexadecimal.
 * - No está permitido usar funciones propias del lenguaje de programación que
 * realicen esas operaciones directamente.
 */

const readline = require("readline-sync");

function Binario(valor) {
    let num = valor;
    let binario = "";  // Usamos un string para acumular los bits

    while (num > 0) {
        binario = (num % 2) + binario;  // Concatenamos el resto al principio
        num = Math.floor(num / 2);  // Dividimos el número por 2
    }

    return binario || "0";  // Si el número es 0, devolvemos "0"
}

function Octal(valor){
    var num = valor;
    var octal = "";

    while(num > 0){
        octal = (num % 8) + octal;
        num = Math.floor(num/8);
    }

    return octal || "0";
}

function Hexadecimal(valor)
{
    var num  = valor;
    var hecadecimal = "";
    const hexChars = "0123456789ABCDEF";

    while(num > 0){
        hexadecimal = hexChars[num % 16] + hecadecimal;
        num = Math.floor(num/16);
    } 

    return hexadecimal || "0"
}


function OctalMath(valor){
    let num = valor;
    let octal = 0;

    while(num > 0){
        octal = (num % 8) + octal;
        num = Math.floor(num/8);
        octal = octal * 10;
    }
    return octal || "0";
}

var num = Binario(8);
console.log(num);  // Salida: 1000
num = Octal(8);
console.log(num); // Salida: 10
num = Hexadecimal(8);
console.log(num);
num = OctalMath(8);
console.log(num);