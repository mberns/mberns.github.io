document.getElementById("header").innerHTML = `
<nav id="nav-header" class="fondo navbar navbar-expand-sm navbar-expand-lg navbar-light ">
<div class="container fondo">
  <div class="collapse navbar-collapse fondo" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0 fondo">
          <li class="nav-item fondo">
              <p id="codo-a-codo" class="nav-link fondo">Codo a Codo</p>
          </li>  
          <li class="nav-item fondo">
              <a class="nav-link fondo" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item fondo">
              <a class="nav-link fondo" href="registro.html">Registro</a>
          </li>
          <li class="nav-item fondo" id="login">
              <a class="nav-link fondo" href="login.html">Login</a>
          </li>
          <li class="nav-item dropdown fondo" id="crud">
              <a class="nav-link dropdown-toggle fondo" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administración</a>
              <div class="dropdown-menu fondo" aria-labelledby="dropdownId">
                  <a class="dropdown-item fondo" href="libros.html">CRUD Libros</a>
              </div>
          </li>
          <li class="nav-item fondo" id="logout">
              <a class="nav-link fondo" href="#" onclick="logout()">Cerrar Sesión</a>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0 fondo">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>
`;

document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log("se guardo el valor isLoggedIn");
    const isAdmin = sessionStorage.getItem("adm") === "1";
    console.log("se guardo el valor isAdmin");

    const loginItem = document.getElementById("login");
    console.log("se guardo el valor loginItem");
    const logoutItem = document.getElementById("logout");
    const crudItem = document.getElementById("crud");
    console.log("se guardaron los valores crudItem y logoutItem");

    console.log("isLoggedIn: ", isLoggedIn);
    console.log("isAdmin: ", isAdmin);
    console.log("loginItem: ", loginItem);
    console.log("logoutItem: ", logoutItem);
    console.log("crudItem: ", crudItem);

    if (isLoggedIn) {
        console.log("entra al  ifisLoggedIn")
        loginItem.style.display = "none";
        logoutItem.style.display = "block";
        console.log("esta adentro del if isLoggedIn");
        if (isAdmin) {
            crudItem.style.display = "block";
        } else {
            crudItem.style.display = "none";
        }
    } else {
        loginItem.style.display = "block";
        logoutItem.style.display = "none";
        crudItem.style.display = "none";
    }
});

function userLogin() {
    console.log("entra a la funcion userLogin");
    localStorage.setItem("isLoggedIn", "true");

    const loginItem = document.getElementById("login");
    const logoutItem = document.getElementById("logout");

    //para que no me muestre mas la pestaña login, pero me muestre la logout
    if (loginItem && logoutItem) {
        loginItem.style.display = "none";
        logoutItem.style.display = "block";
    }

    window.location.href = "./index.html";
}

function logout() {
    sessionStorage.removeItem("adm");
    localStorage.setItem("isLoggedIn", "false");
    
    const loginItem = document.getElementById("login");
    const logoutItem = document.getElementById("logout");
    const crudItem = document.getElementById("crud");

    //cuando cierro sesion me muestra solamente la pestaña login, no me muestra ni las 
    //opciones de administradores, ni la pestaña logout
    if (loginItem && logoutItem && crudItem) {
        loginItem.style.display = "block";
        logoutItem.style.display = "none";
        crudItem.style.display = "none";
    }

    window.location.href = "./login.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('form');
    if (loginForm) {
        console.log("entro al if loginForm");
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const clave = document.getElementById('clave').value;

            if (usuario === 'admin' && clave === 'admin') {
                console.log("se ingreso la clave admin y el usuario admin");
                sessionStorage.setItem("adm", "1");
                localStorage.setItem("isLoggedIn", "true");
                alert('Login exitoso');
                window.location.href = 'index.html';
            } else {
                //alert('Usuario o contraseña incorrectos');
                console.log("ingreso otro usuario, que no es admin")
                alert("ingreso un usuario no administrador");
                sessionStorage.setItem("adm", "0");
                localStorage.setItem("isLoggedIn", "true");
                alert('Login exitoso');
                window.location.href = 'index_usuarios.html';
            }
        });
    }
});

//ME FALTA:
//- poner el home "index_usuarios" cuando los usuarios ya ingresaron a su cuenta
//- hacer la BD de usuarios
//- ver el tema del registro y los permisos de los usuarios q se registran
//- poner en la funcion de login la comprobacion si existe ese usuario registrado en la BD