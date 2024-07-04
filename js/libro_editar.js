console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // libro_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        titulo:"", 
        autor:"",
        genero:"",
        anio_publicacion:0,
        cantidad:0,
        imagen:"",
        //url:'http://localhost:5000/libros/'+id,
        url:'https://martina.pythonanywhere.com/libros/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id;
                    this.titulo = data.titulo;
                    this.autor=data.autor;
                    this.genero=data.genero;
                    this.anio_publicacion=data.anio_publicacion;
                    this.cantidad=data.cantidad;
                    this.imagen=data.imagen;                   
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let libro = {
                titulo:this.titulo,
                autor: this.autor,
                genero: this.genero,
                anio_publicacion: this.anio_publicacion,
                cantidad: this.cantidad,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(libro),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./index.html"; // navega a libros.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
