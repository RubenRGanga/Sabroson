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
    const mesa = document.querySelector('input[name="mesa"]:checked').value

    const cliente = {
        nombre,
        email,
        telefono,
        mesa,
        hora,
        mensaje,
        fecha
    }

    

    if (!clientes) {
        const arrayClientes = [cliente]
        localStorage.setItem('clientes', JSON.stringify(arrayClientes));
    } else {    
       const arrayClientes = JSON.parse(clientes)
       arrayClientes.push(cliente)    
       localStorage.setItem('clientes', JSON.stringify(arrayClientes));
    }

    // if (fecha === clientes.fecha && )

    

}
