// Llamado a la libreria
AOS.init();


var lastScrollTop = 0;
const $nav = document.getElementById("nav")
const $nombre = document.getElementById("nombre")
const $apellido = document.getElementById("apellido")
const $proyectos = document.getElementById("proyectos")
console.log($nav)
let nombre = $nombre.innerHTML

let letras = Array.from(nombre)

let proyectos = $proyectos
/* console.log(proyectos) */

$nombre.addEventListener("mouseover",el=>{
    $nombre.classList.add("verde")
})

$nombre.addEventListener("mouseout",el=>{
    $nombre.classList.remove("verde")
})

$apellido.addEventListener("mouseover",el=>{
    $apellido.classList.add("verde")
})

$apellido.addEventListener("mouseout",el=>{
    $apellido.classList.remove("verde")
})

$proyectos.addEventListener("mouseover",el=>{
    $proyectos.classList.add("verde")
})

$proyectos.addEventListener("mouseout",el=>{
    $proyectos.classList.remove("verde")
})


document.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        $nav.classList.add("top-cero")
        $nav.classList.remove("top-uno")
       console.log("Scroll Down")// downscroll code
    } else {
        console.log("Scroll Up")// upscroll code
        $nav.classList.remove("top-cero")
        $nav.classList.add("top-uno")
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);


