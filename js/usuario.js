const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            // esto es para el boton modificar +(location.search.substr(4)===""?'':"/")+location.search.substr(4)
            url: 'https://luisguerra.pythonanywhere.com/usuarios' ,
            error: false,
            cargando: true,
            /*alta*/
            id: 0,
            usuario: "admin",
            clave: "admin",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                    console.log("estoy en fetch data, en usuarios.js")
                    console.log("usuarios",this.usuarios)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        /*
        eliminar(id) {
            const url = 'https://mcerda.pythonanywhere.com/usuarioss/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },*/
        grabar() {
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol:0
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./index.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")
                })
        },
        /*  modificar() {
              let usuario = {
                  usuario:this.usuario,
                  clave: this.clave,
                  
              }
              var options = {
                  body: JSON.stringify(usuario),
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  redirect: 'follow'
              }
              fetch(this.url, options)
                  .then(function () {               
                      alert("Registro modificado")
                      window.location.href = "./usuarios.html";  
                  })
                  .catch(err => {
                      console.error(err);
                      alert("Error al Modificar")
                  })      
          },*/
        login() {
            console.log("entra a la funcion login");  // Asegurarnos de que se llama la función
            const usuario = this.usuario;
            const clave = this.clave;

            if (usuario === 'admin' && clave === 'admin') {
                console.log("se ingreso la clave admin y el usuario admin");
                sessionStorage.setItem("adm", "1");
                localStorage.setItem("isLoggedIn", "true");
                alert('Login exitoso');
                window.location.href = 'index.html';  // Redirige a la página principal
            } else {
                alert('Usuario o contraseña incorrectos');
            }
            /*
            var i = 0;
            while (i < this.usuarios.length && this.usuarios[i].usuario != this.usuario) {
            i++;
            }
            if (i < this.usuarios.length) {
              if (this.usuarios[i].clave == this.clave) {
                  if (this.usuarios[i].rol == 1) {
                    sessionStorage.setItem("adm", 1);
                  } else {
                    sessionStorage.setItem("adm", 0);
                  }
                  window.location.href = "./index.html";
              } else {
                alert('Clave incorrecta');
              }
            } else {
                alert('Usuario incorrecto');
            }
                */

            /*for (elemento of this.usuarios){
                if (elemento.usuario == this.usuario && elemento.clave==this.clave ){
                    if (elemento.rol=1){
                        sessionStorage.setItem("adm",1)
                    }
                }   

            }*/
           /*
            if (this.usuario === "admin" && this.clave === "admin") {
                sessionStorage.setItem("isAdmin", "true");
                window.location.href = "./index.html";
            } else {
                // Lógica para otros usuarios o error de inicio de sesión
                alert('Usuario o clave incorrectos');
            }
            */

          
         
        }
    },
    created() {
        
        this.fetchData(this.url)




    },
}).mount('#app')