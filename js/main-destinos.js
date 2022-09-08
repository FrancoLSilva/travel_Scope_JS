

function Destinos(idDestino, nombreDestino, PrecioXNoche, fotoDestino)
{
    this.id = idDestino;
    this.nombre = nombreDestino;
    this.precioXNoche = PrecioXNoche;
    this.foto = fotoDestino;

}

const mendoza = {
    idDestino: "V002",
    nombreDestino: "Mendoza",
    precioXNoche:"Precio aproximado: $700 x noche.",
    fotoDestino: "../multimedia/images/mendoza-centro.jpg"

}

const cordoba = {
    idDestino: "V003",
    nombreDestino: "Cordoba",
    precioXNoche:"Precio aproximado: $600 x noche.",
    fotoDestino: "../multimedia/images/cordoba-centro.jpg"

}

const salta = {
    idDestino: "V004",
    nombreDestino: "Salta",
    precioXNoche:"Precio aproximado: $700 x noche.",
    fotoDestino: "../multimedia/images/salta-centro.jpg"

}

const jujuy = {
    idDestino: "V005",
    nombreDestino: "Jujuy",
    precioXNoche:"Precio aproximado: $500 x noche.",
    fotoDestino: "../multimedia/images/jujuy-image.jpg"

}

const destinos = [mendoza, cordoba,salta,jujuy];
localStorage.getItem("destinos", JSON.stringify(destinos));

function mostrarDestinos(destino)
{
    const contenedor=document.getElementById("contenedor-destinos");
    const nodoDestinos= document.createElement("div");
    nodoDestinos.setAttribute("style","width:400px; height:200px; font-size:15px; border:black; display:block;")
    nodoDestinos.innerHTML=`<h4>${destino.nombreDestino}</h4>
                            <img src=${destino.fotoDestino} width=300px; height=200px />
                            <p>${destino.precioXNoche}</p>`
    const button = document.createElement("button")
    button.innerHTML="¡Agregalo a tus favoritos!"
    button.addEventListener("click", ()=>{

        elegirFavorito(destino)
    });

    nodoDestinos.appendChild(button);
    contenedor.appendChild(nodoDestinos)
}

function elegirFavorito(destino)
  {
      localStorage.setItem("favorito", JSON.stringify(destino));
      
  }

function botonFavorito(favorito)
{
    const contenedorfav= document.getElementById("info-destinos");
    const contenedorbutton= document.createElement("div")
    contenedorbutton.setAttribute("style", "width:auto; height:50px; display:flex; justify-content: center; align-items: center;")
    const favButton = document.createElement("button")
    favButton.innerHTML="Visualizar favoritos"
    const handclick = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Tu favorito es: ${favorito.nombreDestino}`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    favButton.addEventListener("click", ()=>{
        handclick
        mostrarFavorito(favorito)
    });
    
    contenedorbutton.appendChild(favButton);
    contenedorfav.appendChild(contenedorbutton);
}



function mostrarFavorito()
  { 
    let favorito = localStorage.getItem("favorito");
    
    if(favorito)
    {
        favorito = JSON.parse(favorito);
        alert(`Tu favorito es: ${favorito.nombreDestino}`)
    }


  }


mostrarDestinos(mendoza)
mostrarDestinos(cordoba)
mostrarDestinos(salta)
mostrarDestinos(jujuy)

botonFavorito()




            