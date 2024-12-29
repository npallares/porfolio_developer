// Llamado a la libreria
AOS.init();

window.addEventListener("load", () => {
   // console.log("hola")
  // Note: if the browser is able to cache the page, `event.persisted`
  // is `true`, and the state is frozen rather than terminated.
});


var lastScrollTop = 0;
const $nav = document.getElementById("nav")
const $nombre = document.getElementById("nombre")
const $apellido = document.getElementById("apellido")
const $proyectos = document.getElementById("proyectos")
const $sobre = document.getElementById("sobre")
const $contacto = document.getElementById("contacto")
const $flotante1 = document.getElementById("flotante1")
const $planeta1 = document.getElementById("planeta1")
const $planeta2 = document.getElementById("planeta2")
const $hamburger = document.getElementById("hamburger");
const $ul = document.querySelector(".nav-menu")
const $navItem = document.querySelectorAll(".nav-menu-item")
const $btnSubmit = document.getElementById("btnSubmit")
const $contactInput = document.querySelectorAll(".contact_input")
const $divMsj = document.getElementById("divMsj")

$hamburger.addEventListener("click",()=>{
    if($ul.classList.contains("isActive")){
        $ul.classList.remove("isActive")

        windows.addEventListener("scroll",function(){})

        
    }else{
        $ul.classList.add("isActive")
        
    }
})

$navItem.forEach(element => {
    element.addEventListener("click",()=>{
        if($ul.classList.contains("isActive")){
            $ul.classList.remove("isActive")
        }else{
            $ul.classList.add("isActive")
        }
    })
});


//FLOTANTE
window.addEventListener("scroll",()=>{
    
    let value = -200 + window.scrollY / 2;
    let value2 = 1 +window.scrollY / 5;



    let value3 = -800 + window.scrollY / 3;
    if($flotante1.getBoundingClientRect())
    $flotante1.style.transform = `translateX(${value}px) rotate(${value2}deg)`
    $planeta1.style.transform = `translateY(${value3}px)`
    $planeta2.style.transform = `translateY(${value3}px)`
})

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

$sobre.addEventListener("mouseover",el=>{
    $sobre.classList.add("verde")
})

$sobre.addEventListener("mouseout",el=>{
    $sobre.classList.remove("verde")
})

$contacto.addEventListener("mouseover",el=>{
    $contacto.classList.add("verde")
})

$contacto.addEventListener("mouseout",el=>{
    $contacto.classList.remove("verde")
})



/* document.addEventListener("scroll", function(){ 
    if($ul.classList.contains("isActive")){

    }else{
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            $nav.classList.add("top-cero")
            $nav.classList.remove("top-uno")
            //console.log("Scroll Down")// downscroll code
        } else {
            //console.log("Scroll Up")// upscroll code
            $nav.classList.remove("top-cero")
            $nav.classList.add("top-uno")
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}
}, false); */


//Funcion email


function sendMail(params){
    var tempParams = {
        formName:document.getElementById("formName").value,
        formAbout:document.getElementById("formAbout").value,
        message:document.getElementById("message").value,
        formEmail:document.getElementById("formEmail").value,
    };

    emailjs.send(`gmail`,`template_ud0jolg`,tempParams)
    .then(function(res){
        // console.log("secces",res.status);
        
        formName.value = ""
        formAbout.value = ""
        message.value = ""
        formEmail.value = ""

    })
}

$btnSubmit.addEventListener("click",()=>{
    $contactInput.forEach(el =>{
        el.classList.remove("contact_input")
        el.classList.add("disp_none")
    })
    $divMsj.classList.remove("disp_none")
    $btnSubmit.classList.add("disp_none")

})
