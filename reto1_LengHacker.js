/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const readline = require("readline-sync");

const diccionario = {a:4, b:I3, c:[, d:), e:3, f:|=, g:& , "#", "1", ",_|", ">|", "1", "/\/\ ", "r", "*", "9", "I2", "5", "7", "(_)", "\/", "uu", ")(","j","2"};