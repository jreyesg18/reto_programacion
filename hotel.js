const readline = require("readline-sync");

class SistemaReservas {
    constructor() {
        this.habitaciones = {};
        for (let i = 1; i <= 5; i++) {
            this.habitaciones[i] = null;
        }
    }

    reservarHabitacion() {
        let numHab = parseInt(readline.question("Ingrese el número de habitación que desea reservar (1-5):"));
        if (!(numHab in this.habitaciones)) {
            console.log("Habitación inválida. Elija un número entre 1 y 5.");
            return;
        }

        if (this.habitaciones[numHab] !== null) {
            console.log(`La habitación ${numHab} está ocupada. Intente otra.`);
            return;
        }

        let fechaInicio = readline.question("Ingrese fecha de inicio (YYYY-MM-DD):");
        let fechaFin = readline.question("Ingrese fecha de término (YYYY-MM-DD):");

        let inicio = new Date(fechaInicio);
        let fin = new Date(fechaFin);

        if (isNaN(inicio.getTime()) || isNaN(fin.getTime()) || inicio >= fin) {
            console.log("La fecha de inicio debe ser antes de la fecha de término y en formato correcto.");
            return;
        }

        this.habitaciones[numHab] = { fechaInicio: inicio, fechaFin: fin };
        console.log(`Habitación ${numHab} reservada del ${inicio.toISOString().split('T')[0]} al ${fin.toISOString().split('T')[0]}.`);
    }

    disponibilidad() {
        console.log("\nEstado de las habitaciones:");
        for (let numHab in this.habitaciones) {
            let reserva = this.habitaciones[numHab];
            if (reserva) {
                console.log(`Habitación ${numHab}: Ocupada del ${reserva.fechaInicio.toISOString().split('T')[0]} al ${reserva.fechaFin.toISOString().split('T')[0]}`);
            } else {
                console.log(`Habitación ${numHab}: Disponible`);
            }
        }
    }

    cancelarReserva() {
        let numHab = parseInt(readline.question("Ingrese el número de la habitación a cancelar (1-5):"));
        if (!(numHab in this.habitaciones) || this.habitaciones[numHab] === null) {
            console.log(`No hay reserva en la habitación ${numHab}.`);
            return;
        }

        this.habitaciones[numHab] = null;
        console.log(`Reserva de la habitación ${numHab} cancelada.`);
    }

    contarHabitacionesDisponibles() {
        let disponibles = Object.values(this.habitaciones).filter(reserva => reserva === null).length;
        console.log(`\n🔹 Habitaciones disponibles: ${disponibles} de 5`);
    }
}

// Menú de opciones
const sistema = new SistemaReservas();

while (true) {
    console.log("\nMenú:");
    console.log("1. Ver disponibilidad de habitaciones");
    console.log("2. Reservar una habitación");
    console.log("3. Cancelar una reserva");
    console.log("4. Contar habitaciones disponibles");
    console.log("5. Salir");

    let opcion = readline.question("Seleccione una opción:");

    if (opcion === "1") {
        sistema.disponibilidad();
    } else if (opcion === "2") {
        sistema.reservarHabitacion();
    } else if (opcion === "3") {
        sistema.cancelarReserva();
    } else if (opcion === "4") {
        sistema.contarHabitacionesDisponibles();
    } else if (opcion === "5") {
        console.log("Saliendo del sistema...");
        break;
    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }
}