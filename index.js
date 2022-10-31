
function validateForm() {
    const userName = document.forms["formulario"]["usuario"].value
    const password = document.forms["formulario"]["password"].value
    if (userName == "") {
      alert("Name must be filled out");
      return false;
    }

    if (password == "" && password.length < 6) {
        alert("Password must be 6+ characters")
        return false;
    }
  }


class Cliente {
    constructor(usuario, pass, email){

    this.usuario = usuario
    this.pass = pass
    this.email = email
    }
}

let arrayData = [new Cliente(userName, password), new Cliente(userName, password), new Cliente(userName, password)]