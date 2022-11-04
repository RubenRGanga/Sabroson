const loginDOMEl = document.querySelector("#login-btn")

let usuarios, usuarioLogueado

console.log(usuarioLogueado)

function checkLogin() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));

    usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))
}

checkLogin()

loginDOMEl.onclick = function (e) {
  e.preventDefault()
  const user = document.querySelector('#user').value
  const pass = document.querySelector('#pass').value

  const currentUser = usuarios.find((usuario) => user === usuario.user && pass === usuario.pass)

  if (currentUser) {
      localStorage.setItem("usuarioLogueado", JSON.stringify(currentUser)) 
  }
  checkLogin()
  renderLogin()
}

const renderLogin = () =>{
  const panelButton = document.querySelector('#linkpanel')
  const logoutButton = document.querySelector('#logout-btn')

  logoutButton.style.display = 'none'
  panelButton.style.display = 'none'

  if(usuarioLogueado) {
    panelButton.style.display = 'block'
    logoutButton.style.display = 'block'
  }


}

const logoutButton = document.querySelector('#logout-btn')

logoutButton.onclick = function (e) {
  console.log(e.target)
  localStorage.removeItem('usuarioLogueado')

  checkLogin()
  renderLogin()
}

renderLogin()
