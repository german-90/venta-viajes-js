import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll("a")
let titulocontent = document.getElementById("titulo")
let subtitulocontent = document.getElementById("subtitulo")
let parrafocontent = document.getElementById("parrafo")

console.log(enlaces)
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })
        this.classList.add('active')

        let contenido = obtenercontenido(this.textContent)
        titulocontent.innerHTML = contenido.titulo
        subtitulocontent.innerHTML = contenido.subtitulo
        parrafocontent.innerHTML = contenido.parrafo
    });

});


function obtenercontenido(enlace) {

    let contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres
    }

    return contenido[enlace]
}