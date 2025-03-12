/*     
1.Compra tarjeta y carga inicial\n 
2.Ingreso Recarga\n 
3.consultar saldo\n 
4.Pago pasaje y viaje \n 
5.Consultar Tiempo de viaje\n 
7.Salir \n Elija un numero que desea ocupar: 
*/

const readline = require("readline-sync");

class SistemaMetro {
    constructor() {
        this.tarjetas = [];
        this.contadorTarjetas = 1;
    }

    comprarTarjeta(tipo, saldoInicial = 0) {
        const numero = String(this.contadorTarjetas).padStart(5, '0');

        const nuevaTarjeta = {
            tipo: tipo,
            numero: numero,
            saldo: saldoInicial
        };
        
        this.tarjetas.push(nuevaTarjeta);
        this.contadorTarjetas++;

        console.log(`Tarjeta ${numero} (${tipo}) creada con $${saldoInicial} de saldo.`);
    }

    carga(numeroTarjeta, monto) {
        let tarjeta = this.tarjetas.find(t => t.numero === numeroTarjeta);
        
        if (!tarjeta) {
            console.log("Tarjeta no encontrada.");
            return;
        }

        if (monto > 0) {
            tarjeta.saldo += monto;
            console.log(`💰 Se recargaron $${monto}. Saldo actual: $${tarjeta.saldo}`);
        } else {
            console.log(" Monto inválido.");
        }
    }

    consultarSaldo(numeroTarjeta) {
        let tarjeta = this.tarjetas.find(t => t.numero === numeroTarjeta);
        
        if (!tarjeta) {
            console.log("Tarjeta no encontrada.");
            return;
        }

        console.log(`📢 Saldo actual de la tarjeta ${numeroTarjeta}: $${tarjeta.saldo}`);
    }
}

// Crear instancia
const sistema = new SistemaMetro();

// Menú interactivo
while (true) {
    console.log("\nMenú:");
    console.log("1. Comprar tarjeta y carga");
    console.log("2. Cargar");
    console.log("3. Consultar saldo");
    console.log("9. Salir");

    let opcion = readline.question("Ingrese el número (1-3, 9 para salir): ");

    if (opcion === "1") {
        let tipo = readline.question("Ingrese el tipo de tarjeta (Ej: Adulto, Estudiante): ");
        let saldoInicial = parseFloat(readline.question("Ingrese saldo inicial: "));
        sistema.comprarTarjeta(tipo, saldoInicial);

    } else if (opcion === "2") {
        let numeroTarjeta = readline.question("Ingrese el número de la tarjeta: ");
        let monto = parseFloat(readline.question("Ingrese el monto a recargar: "));
        sistema.carga(numeroTarjeta, monto);

    } else if (opcion === "3") {
        let numeroTarjeta = readline.question("Ingrese el número de la tarjeta: ");
        sistema.consultarSaldo(numeroTarjeta);

    } else if (opcion === "9") {
        console.log("Saliendo del sistema...");
        break;

    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }
}
