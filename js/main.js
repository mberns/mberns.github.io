document.getElementById("header").innerHTML=` <nav id="nav-header" class="fondo navbar navbar-expand-sm navbar-expand-lg navbar-light ">
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
          <li class="nav-item fondo">
              <a class="nav-link fondo" href="login.html">Login</a>
          </li>
          <li class="nav-item dropdown fondo" id="crud">
              <a class="nav-link dropdown-toggle fondo" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adminitración</a>
              <div class="dropdown-menu fondo" aria-labelledby="dropdownId">
                  <a class="dropdown-item fondo" href="libros.html">CRUD Libros</a>
              </div>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0 fondo">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>
`


if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}

//COSAS QUE SAQUE PERO DEJO ACA POR LAS DUDAS

//bg-light
/*
<a class="navbar-brand fondo" href="index.html">Biblioteca</a>
  <button class="navbar-toggler d-lg-none fondo" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>


 <li class="nav-item dropdown fondo">
              <a class="nav-link dropdown-toggle fondo" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Adminitración</a>
              <div class="dropdown-menu fondo" aria-labelledby="dropdownId">
                  <a class="dropdown-item fondo" href="libros.html">Libros</a>
                  <a class="dropdown-item fondo" href="#">Action 2</a>
              </div>
          </li>



*/