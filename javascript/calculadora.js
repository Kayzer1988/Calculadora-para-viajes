/* //Es una calculadora para una remiseria que quier averiguar el valor del viaje y sus impuestos en caso de requerirlos. */

//Variables
let kmDelViaje = parseInt(prompt("Ingresa la cantidad de km del viaje."));

let valorDelKm = parseInt(prompt("Ingresa el valor del km para este viaje"));

let esperaEnElViaje;
let espera = 0;
let valorDeLaEspera;
let totalViaje;

//Bucle para saber si el cliente necesita o no espera.
while (true) {
    esperaEnElViaje = parseInt(prompt("¿El cliente necesita que se lo espere?\nIngrese el código correspondiente:\n1-Si\n2-No"));

    if (esperaEnElViaje == 1) {
        espera += 1;
        break; // Salir del bucle
    } else if (esperaEnElViaje == 2) {
        espera += 0;
        break; // Salir del bucle
    } else {
        alert("Código incorrecto. Por favor, ingrese 1 o 2.");//repite bucle.
    }
}

//Definiendo funcion para cada respuesta.
if (espera == 0) {
    espera0(kmDelViaje, valorDelKm);
} else if (espera == 1) {
    espera1(kmDelViaje, valorDelKm)
}

//calculo del valor del viaje sin espera.
function espera0(kmDelViaje, valorDelKm) {
    let totalViaje = kmDelViaje * valorDelKm;

    while (true) {
        let factura = parseInt(prompt("¿El cliente requiere factura?\nIngrese el código correspondiente:\n1-Si\n2-No"));

        if (factura == 1) {
            let Total = totalViaje * 1.21;
            alert("El precio del viaje final con factura es $" + Total);
            break; // Salir del bucle
        } else if (factura == 2) {
            alert("Gracias por viajar con nosotros, el total del viaje es $" + totalViaje);
            break; // Salir del bucle
        } else {
            alert("Código incorrecto. Por favor, ingrese 1 o 2."); //repite bucle.
        }
    }
}

//Calculo del valor del viaje con espera.
function espera1(kmDelViaje, valorDelKm) {
    let valorDeLaEspera = parseInt(prompt("Ingrese el valor de la espera."))
    let totalViajeConEspera = ((kmDelViaje * valorDelKm) + valorDeLaEspera)


    while (true) {
        let factura = parseInt(prompt("¿El cliente requiere factura?\nIngrese el código correspondiente:\n1-Si\n2-No"));

        if (factura == 1) {
            let Total = totalViajeConEspera * 1.21;
            alert("El precio del viaje final con factura es $" + Total);
            break; // Salir del bucle
        } else if (factura == 2) {
            alert("Gracias por viajar con nosotros, el total del viaje es $" + totalViajeConEspera);
            break; // Salir del bucle
        } else {
            alert("Código incorrecto. Por favor, ingrese 1 o 2."); //repite bucle.
        }
    }
}
