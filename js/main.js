
programarBotonLog();

function programarBotonLog()
{
    const btn = document.getElementById("btn-login")
    btn.addEventListener("click", ()=>{
    procesarLog();

    })
}


function procesarLog()
{
    const username = document.getElementById("usernameBo").value;
    const password = document.getElementById("passwordBo").value;

    if(username===" " || password===" ")
    {
        alert("Debe rellenar los campos para acceder a la pagina")
    }

    else
    {
        if(username=="Backoffice22" && password=="1234")
        {   
            mostrarBackOffice();
            alert(`Bienvenido ${username} a TravelScope!`);
            
        } 
        else{
            alert("Datos invalidos");
        }
    }

}

function mostrarBackOffice(){
    const containerBo=document.getElementById("backOffice-Container");
    const nodoAltaServ=document.createElement("button")
    nodoAltaServ.setAttribute("style","width:40px; height:20px; font-size:15px; color:white; background-color:black; border:white");
    const nodoConsultaServ=document.createElement("button")
    containerBo.appendChild(nodoAltaServ)
    containerBo.appendChild(nodoConsultaServ)
}


function redireccionar()
{   
    window.location.href="backoffice/index-backoff.html";
}

function Servicios(fotoServicio, idServicio, nombreServicio, descripcionServicio)
{
    this.img = fotoServicio;
    this.id = idServicio;
    this.nombre = nombreServicio;
    this.description = descripcionServicio;

    const viajes= new servicio("href:../multimedia/images/viaje-imege.jpg", "V001", "Traslados","Tenemos disponibles las mejores opciones de traslado, elegi la que mas te guste!")

}


const viajes ={
    img: "multimedia/images/viaje-image.jpg",
    id: "V001",
    nombre: "viajes",
    description: "Tenemos disponibles las mejores opciones de traslado, elegi la que mas te guste!",
}

const hospedaje ={
    img: "multimedia/images/hotel-image.jpg",
    id: "H001",
    nombre: "Hospedaje",
    description: "¡Elegi la opcion que mas te guste entre nuestra gran variedad de hoteles!",
}

const excursiones ={
    img: "multimedia/images/excursion-montaña-image.jpg",
    id: "E001",
    nombre: "Excursiones",
    description: "Tenemos disponibles las mejores opciones de traslado, ¡elegi la que mas te guste!",
}


const servicios = [viajes , hospedaje, excursiones] ;
localStorage.setItem("Servicios", JSON.stringify(servicios));


mostrarServicios(viajes)
mostrarServicios(hospedaje)
mostrarServicios(excursiones)


function mostrarServicios(servicios)
{   
    const container= document.getElementById("sec-serv")
    const nodoServicios= document.createElement("div")
    nodoServicios.setAttribute("style","width:400px; height:200px; font-size:15px; border:black" );
    nodoServicios.innerHTML=`<h4>${servicios.nombre}</h4>
                            <img src=${servicios.img} width=400px, height=250px/ >
                            <p>Descripcion:${servicios.description}</p>`
    container.appendChild(nodoServicios)
}


/* FETCH */

function programarVerPokemon()
{
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((json) => console.log(json));
}

