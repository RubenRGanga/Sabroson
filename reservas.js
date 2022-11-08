const reservarDOMEl = document.querySelector('#reservar-btn')

const clientes = localStorage.getItem('clientes')

const addEspecial = document.querySelector('#addespecial')

const selectDOMEl = document.querySelector('#platos')


if (clientes) {
    const objClientes = JSON.parse(clientes)
    objClientes
}

//FALTA POR COMPROBAR RESERVAS EN BASE DE DATOS PARA MOSTRAR EN ROJO LAS MESAS QUE YA ESTEN OCUPADAS Y NO SE PUEDAN RESERVAR

const mesasWrapper = document.querySelector('#mesaswrap')

mesasWrapper.style.display = 'none'

const fechaMesas = document.querySelector('#fecha')

const horaMesas = document.querySelector('#hora')


function displayMesas() {
    mesasWrapper.style.display = 'block'
    const mesasReservadas = JSON.parse(clientes)
    const hora = document.querySelector('#hora').value
    const mesa = document.querySelectorAll('.circulo')
    const radioInput = document.querySelectorAll('input[name="mesa"]')
    
    for (let i = 0; i < mesasReservadas.length; i++) {
        if(mesasReservadas[i].fecha === fechaMesas.value && mesasReservadas[i].hora === hora) {
            mesa[mesasReservadas[i].mesa -1].style.backgroundColor = "red";
            radioInput[mesasReservadas[i].mesa -1].disabled = true;
        } else {
            mesa[mesasReservadas[i].mesa -1].style.backgroundColor = "green";
            radioInput[mesasReservadas[i].mesa -1].disabled = false;
        }
    } 
   
}

fechaMesas.onchange = function (e){
    horaMesas.onchange = function (e) {
        displayMesas()
    }
    displayMesas()
}


// AÑADIR ESPECIALES SEGUN NÚMERO DE COMENSALES

function checkEspeciales () {
    const comensales = parseInt(document.querySelector('#comensales').value, 10)
    const platosEspeciales = document.querySelectorAll('#platos .platoespecial').length

    if(comensales > platosEspeciales) {
            printEspecial()
        } else {
            alert("El máximo es un especial por comensal")
        }
}

function printEspecial() {
    let especiales =`<select class='platoespecial'>
                        <option value="especial1">especial1</option>
                        <option value="especial2">especial2</option>
                        <option value="especial3">especial3</option>
                        <option value="especial4">especial4</option>
                        <option value="especial5">especial5</option>
                    </select>`

    selectDOMEl.innerHTML += especiales
}



addEspecial.onclick = function (e) {
    e.preventDefault()
    checkEspeciales()
}



// BOTON DE RESERVAS Y CREACION DE CLIENTES EN BASE DE DATOS

reservarDOMEl.onclick = function (e) {

    e.preventDefault()

    const nombre = document.querySelector ('#nombre').value
    const email = document.querySelector ('#email').value
    const telefono = document.querySelector ('#telefono').value
    const especiales = []
    const mensaje = document.querySelector ('#comentarios').value
    const fecha = document.querySelector ('#fecha').value
    const hora = document.querySelector('#hora').value
    const mesa = parseInt(document.querySelector('input[name="mesa"]:checked').value, 10) 
    const comensales = parseInt(document.querySelector('#comensales').value, 10)


    const cliente = {
        nombre,
        email,
        telefono,
        mesa,
        hora,
        mensaje,
        fecha,
        especiales,
        comensales
    }

    // AÑADIR CLIENTES A LA BASE DE DATOS

    function addReserva() {
    if (!clientes) {
        const arrayClientes = [cliente]
        localStorage.setItem('clientes', JSON.stringify(arrayClientes));
    } else {    
       const arrayClientes = JSON.parse(clientes)
       arrayClientes.push(cliente)    
       localStorage.setItem('clientes', JSON.stringify(arrayClientes));
    }
    }

    // AÑADIR ESPECIALES ELEGIDOS A LA BASE DE DATOS
    
    const dataEspeciales = document.querySelectorAll(".platoespecial")

    dataEspeciales.forEach(element => {
        cliente.especiales.push(element.value)
    });
    

    // COMPARAMOS LA FECHA DEL FORM CON LA FECHA DE HOY EN MILISEGUNDOS Y SI ES PASADA NO AÑADE RESERVA

    const fechaControl = new Date(fecha).getTime()

    if(fechaControl <= Date.now() - 86400000) {
        alert("Compruebe la fecha")
    } else if (comensales >= 5 && mesa <= 5) {
        alert("El número de comensales es superior al aforo de la mesa seleccionada")
    } else {
        addReserva()
    }

    //IMPRIMIR INFO DE RESERVA EN LA PAGINA CUANDO SE COMPLETE

    const reservaDOMEl = document.querySelector('#printreserva')

    reservaDOMEl.style.display = 'block'

    reservaDOMEl.innerHTML += `Reserva realizada con éxito a nombre de ${cliente.nombre} para el día ${(cliente.fecha).split('-').reverse().join('-')}. Esperamos ${cliente.comensales} comensales en el servicio de ${cliente.hora}. Para cualquier modificación a su reserva contáctenos via email o teléfono.`

}