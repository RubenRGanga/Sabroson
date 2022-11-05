const reservarDOMEl = document.querySelector('#reservar-btn')

const clientes = localStorage.getItem('clientes')

console.log(clientes)

if (clientes) {
    const objClientes = JSON.parse(clientes)
    objClientes
}

reservarDOMEl.onclick = function (e) {

    e.preventDefault()

    const nombre = document.querySelector ('#nombre').value
    const email = document.querySelector ('#email').value
    const telefono = document.querySelector ('#telefono').value
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

    // COMPARAMOS LA FECHA DEL FORM CON LA FECHA DE HOY EN MILISEGUNDOS Y SI ES PASADA NO AÑADE RESERVA

    const fechaControl = new Date(fecha).getTime()

    if(fechaControl <= Date.now() - 86400000) {
        alert("Compruebe la fecha")
    } else if (comensales >= 5 && mesa <= 5) {
        alert("El número de comensales es superior al aforo de la mesa seleccionada")
    } else {
        addReserva()
    }

    //FALTA POR COMPROBAR RESERVAS EN BASE DE DATOS PARA MOSTRAR EN ROJO LAS MESAS QUE YA ESTEN OCUPADAS Y NO SE PUEDAN RESERVAR

}
