/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */

const readline = require("readline-sync");

// Función que convierte los valores numéricos en los puntos correspondientes
function getPuntaje(num) {
    const puntuaciones = ["Love", "15", "30", "40"];
    return puntuaciones[num] || "Deuce";
}

var P1 = 0;  // Puntuación inicial de Player 1
var P2 = 0;  // Puntuación inicial de Player 2

// Función para mostrar la puntuación actual
function mostrarPuntaje() {
    let scoreP1 = getPuntaje(P1);
    let scoreP2 = getPuntaje(P2);
    console.log(`${scoreP1} - ${scoreP2}`);
}

// Simula el juego con una secuencia predefinida o aleatoria de puntos
var secuenciaPuntos = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];

for (let i = 0; i < secuenciaPuntos.length; i++) {
    let punto = secuenciaPuntos[i];  // Obtiene el siguiente jugador que gana el punto
    
    if (punto === "P1") {
        P1++;
    } else {
        P2++;
    }
    
    mostrarPuntaje();

    // Verifica si alguien ha ganado
    if (P1 === 4 && P2 < 3) {
        console.log("Ha ganado el P1");
        break;
    }
    if (P2 === 4 && P1 < 3) {
        console.log("Ha ganado el P2");
        break;
    }

    // Reglas de "Deuce" y "Ventaja"
    if (P1 === 3 && P2 === 3) {
        console.log("Deuce");
    }
    if (P1 === 4 && P2 === 3) {
        console.log("Ventaja P1");
    }
    if (P2 === 4 && P1 === 3) {
        console.log("Ventaja P2");
    }
}
