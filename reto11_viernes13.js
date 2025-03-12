/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 
 * en el mes y el año indicados.
 * La función recibirá el mes y el año y retornará 
 * verdadero o falso.
 */

const readline = require("readline-sync");

function Viernes13(Mes, Ano){
    var date = new Date(Ano, Mes - 1, 13);

    if (date.getDay()==5)
        return true;
    else
        return false;
}

let Mes = 9, Ano= 2013;
console.log(Viernes13(Mes, Ano));


