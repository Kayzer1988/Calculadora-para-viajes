/* //Es una calculadora para una remiseria que quiere averiguar el valor del viaje y sus impuestos en caso de requerirlos. */

class clientesNuevos{
    constructor (nombre,direccion,telefono,clasificacion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.clasificacion = clasificacion;
    }
}

//array
const clientesRemiseria = [
    {
        nombre: "Daiana Alderete",
        direccion: "Belgrano 1259",
        telefono: 1189105641,
        clasificacion: "VIP"
    },
    {
        nombre: "Ariel Kubar",
        direccion: "Fatima 550",
        telefono: 1152857998,
        clasificacion: "VIP"
    },
    {
        nombre: "Rufina Silvero",
        direccion: "Av. San Martin 250",
        telefono: 1156327866,
        clasificacion: "Basico"
    },
    {
        nombre: "Martin Acosta",
        direccion: "Croacia 3560",
        telefono: 1155698525,
        clasificacion: "Basico"
    }

];

console.log(clientesRemiseria)


//variables
let clienteElegido
let esperaEnElViaje;
let espera = 0;
let valorDeLaEspera;
let totalViaje;
let descuentoVip
let descuentoVipFactura

//ciclo para buscar o agregar nuevo cliente
while (true){

    let elegirOpcion = parseInt(prompt("Ingrese el numero de la opción deseada:\n 1- Quiere buscar un cliente?\n 2- Agregar nuevo cliente?"));

    if (elegirOpcion == 1){
    let elegirCliente = prompt("Ingrese el nombre del cliente a buscar.");
    //Función de busqueda de cliente
    clienteElegido = clientesRemiseria.find(cliente =>cliente.nombre.toLowerCase().includes(elegirCliente.toLowerCase()))
        break;
    } else if (elegirOpcion == 2){
        nombre = prompt ("Ingrese el nombre del nuevo cliente.");
        direccion = prompt("Ingrese la direccion del cliente nuevo.");
        telefono = parseInt(prompt("Ingresa el numero de telefono del nuevo cliente"));
        clasificacion = prompt("Ingrese el tipo de clasificacion de cliente./n Ingrese una de las opciones: VIP o Basico.").toUpperCase();
        const nuevoCliente = new clientesNuevos(nombre,direccion,telefono,clasificacion);
        clientesRemiseria.push(nuevoCliente);
        clienteElegido = nuevoCliente;
        break;
    }  else {
        alert("Código incorrecto. Por favor, ingrese un codigo valido.?");
    }
}

//Función filtrar
const clasiFiltrado = clientesRemiseria.filter(cliente => cliente.clasificacion.toUpperCase() === "VIP");

console.log(clienteElegido);

//Preguntas sobre km y precios
let kmDelViaje = parseInt(prompt("Ingresa la cantidad de km del viaje."));

let valorDelKm = parseInt(prompt("Ingresa el valor del km para este viaje"));



//Bucle para saber si el cliente necesita o no espera.
while (true) {
    esperaEnElViaje = parseInt(prompt("¿El cliente " + clienteElegido.nombre + " necesita que se lo espere?\nIngrese el código correspondiente:\n1-Si\n2-No"));

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
        let factura = parseInt(prompt("¿" + clienteElegido.nombre + " requiere factura?\nIngrese el código correspondiente:\n1-Si\n2-No"));

        if (factura == 1) {
            let Total = totalViaje * 1.21;
            //Funcion filtrar para comparar nombre del cliente elegido, con función de filtrado clasificación VIP.
            if (clasiFiltrado.find(cliente => cliente.nombre === clienteElegido.nombre)){
                descuentoVipFactura = Total * 0.90;
                alert("🎉Felicidades🎉 " + clienteElegido.nombre + " como cliente VIP, hemos aplicado un descuento especial a su tarifa. El precio final del viaje es aún más bajo de lo que esperaba, el total a pagar con factura es $" + descuentoVipFactura);
                break;           
            } else {
                alert(clienteElegido.nombre + " el precio del viaje final con factura es $" + Total);
                break; // Salir del bucle
            }
        } else if (factura == 2) {
            //Funcion filtrar para comparar nombre del cliente elegido, con función de filtrado clasificación VIP.
            if (clasiFiltrado.find(cliente => cliente.nombre === clienteElegido.nombre)){
                descuentoVip = totalViaje * 0.90;
                alert("🎉Felicidades🎉 " + clienteElegido.nombre + " como cliente VIP, hemos aplicado un descuento especial a su tarifa. El precio final del viaje es aún más bajo de lo que esperaba, el total a pagar es $" + descuentoVip);
                break;
            } else {
                alert("Gracias " + clienteElegido.nombre + " por viajar con nosotros, el total del viaje es $" + totalViaje);
                break; // Salir del bucle
            }
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
        let factura = parseInt(prompt("¿" + clienteElegido.nombre + " requiere factura?\nIngrese el código correspondiente:\n1-Si\n2-No"));

        if (factura == 1) {
            let Total = totalViajeConEspera * 1.21;
            //Funcion filtrar para comparar nombre del cliente elegido, con función de filtrado clasificación VIP.
            if (clasiFiltrado.find(cliente => cliente.nombre === clienteElegido.nombre)){
                let descuentoVipFactura = Total * 0.90;
                alert("🎉Felicidades🎉 " + clienteElegido.nombre + " como cliente VIP, hemos aplicado un descuento especial a su tarifa. El precio final del viaje es aún más bajo de lo que esperaba, el total a pagar con factura es $" + descuentoVipFactura);
                break;
            } else {
                alert(clienteElegido.nombre + " el precio del viaje final con factura es $" + Total);
                break; // Salir del bucle
            }
        } else if (factura == 2) {
            //Funcion filtrar para comparar nombre del cliente elegido, con función de filtrado clasificación VIP.
            if (clasiFiltrado.find(cliente => cliente.nombre === clienteElegido.nombre)){
                let descuentoVip = totalViajeConEspera * 0.90;
                alert("🎉Felicidades🎉 " + clienteElegido.nombre + " como cliente VIP, hemos aplicado un descuento especial a su tarifa. El precio final del viaje es aún más bajo de lo que esperaba, el total a pagar es $" + descuentoVip);
                break;
            } else {
                alert("Gracias " + clienteElegido.nombre + " por viajar con nosotros, el total del viaje es $" + totalViajeConEspera);
                break; // Salir del bucle
            }
        } else {
            alert("Código incorrecto. Por favor, ingrese 1 o 2."); //repite bucle.
        }
    }
}

