
const addUser = document.querySelector("#vale");
addUser.onclick = function (e) {

    const fieldset = document.querySelector("#acceder fieldset")

    fieldset.style.display = "block";

}


const addUser2 = document.querySelector('#acceso')

const usuarios = localStorage.getItem('usuarios')


if (usuarios) {
    const objUsuarios = JSON.parse(usuarios)
    objUsuarios
}

addUser2.onclick = function (e) {

    e.preventDefault()

    const user = document.querySelector('#user').value
    const password = document.querySelector('#password').value


    const usuario = {
        user,
        password,

    }
    // console.log(usuario)

    if (usuarios) {
        const arrayUsuario = JSON.parse(usuarios)
        // console.log(arrayUsuario)
        arrayUsuario.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(arrayUsuario));
    }

  

    const inputU = document.querySelector('#user');
    const inputP = document.querySelector('#password');

    if ((inputU.reportValidity()) === true && (inputP.reportValidity()) === true) {


        alert("Añadido")
        window.location.reload()
    }


    

      
    

}

const clientesT = localStorage.getItem('clientes')
const tablaUsuarios = JSON.parse(clientesT)
// console.log(tablaUsuarios)

const buscarTabla = document.querySelector('#buscar')
buscarTabla.onclick = function (e) {

    e.preventDefault()
    const fecha = document.querySelector('#calen').value
    // console.log(fecha)
    const buscarItem = tablaUsuarios.filter(item => item.fecha === fecha)
    // console.log(buscarItem)
    

    for (let i = 0; i < buscarItem.length; i++) {
        const addn = document.createElement("TR");
        addn.setAttribute("id", "tdel" + i,);
        addn.setAttribute("class","tbnew");
        // console.log(buscarItem[i])

        console.log(buscarItem[i].especiales)

        addn.innerHTML = "<tr><td>" + buscarItem[i].nombre + "</td><td>" + buscarItem[i].telefono + "</td><td>" + buscarItem[i].email + "</td><td>" + buscarItem[i].mesa + "</td></tr>" + "</td><td>" + buscarItem[i].hora + "</td></tr>" + "</td><td>" + buscarItem[i].nota + "</td></tr>" + "</td><td>" + "<select>" + "<option>"+ buscarItem[i].especiales[0] + "</option>" + "<option>"+ buscarItem[i].especiales[1] + "</option>" + "<option>"+ buscarItem[i].especiales[2] + "</option>" + "</select>" + "</td></tr>" + "<tr><td>"  +`<button id="cancelar${[i]}">cancelar</button>`+ "</td></tr>" ;

        document.getElementById("tableBody").appendChild(addn);

        document.querySelector(`#cancelar${[i]}`).onclick = function (e) {
            document.querySelector(`#tdel${[i]}`).remove()


            // localStorage.removeItem('clientes' == console.log(JSON.stringify(buscarItem[i]))) 

            // localStorage.removeItem.JSON.parse(clientesT[i]) == (buscarItem[i])

            const clientesR = (buscarItem[i])
            // console.log(clientesR)

            //console.log(JSON.parse(localStorage.getItem("clientes")).indexOf(clientesR) )
            
            let resultado = tablaUsuarios.filter(usuario => usuario !== buscarItem[i])

            console.log(resultado)
            // localStorage.removeItem("clientes")
            localStorage.setItem("clientes",JSON.stringify(resultado))


            // window.location.reload()
        }

    }


}



