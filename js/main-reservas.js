

contenedorConsultas();
validacionFormulario();

function contenedorConsultas(){ ss

    const nodoPresupuesto=document.getElementById("Presupuesto-reserv"); 
        nodoPresupuesto.onclick= (operacion) => {
            let destinoUsuario = prompt(`Ingrese su destino:
                   Salta
                   Jujuy
                   Cordoba
                   Mendoza`);

            alert(`Su proximo destino es ${destinoUsuario}, complete los datos a continuacion para calcular su viaje`);
            let Numero1 = Number(prompt("Ingrese el numero de pasajeros"));
            let Numero2 = Number(prompt("Ingrese la cantidad de dias"));

            if (isNaN(Numero1) || isNaN(Numero2)) {
                alert("Operacion invalida");
            }

            else {
                switch (operacion) {

                    case 'Salta':
                        {
                            const resultadoSalta = (Numero1 * 5000) + (Numero2 * 500);
                            alert(`El valor aproximado de su viaje es: ${resultadoSalta}`);
                            break;
                        }


                    case 'Jujuy':
                        {
                            const resultadoJujuy = (Numero1 * 6000) + (Numero2 * 1000);
                            alert(`El valor aproximado de su viaje es: ${resultadoJujuy}`);
                            break;
                        }

                    case 'Cordoba':
                        {
                            const resultadoCordoba = (Numero1 * 7000) + (Numero2 * 1500);
                            alert(`El valor aproximado de su viaje es: ${resultadoCordoba}`);
                            break;
                        }

                    case 'Mendoza': {
                        const resultadooMendoza = (Numero1 * 8000) + (Numero2 * 2000);
                        alert(`El valor aproximado de su viaje es: ${resultadooMendoza}`);
                        break;
                    }

                    default:
                        {
                            alert("Usted no se va de viaje");
                        }

                }
            }

        } ;
        

    const nodoAdicional=document.getElementById("Adicionales-reserv");
        nodoAdicional.onclick= () => {
            do {
                let opciones = prompt(`¿Desea sumar servicios?
                                        1. Si
                                        2. No`);
                const i = opciones;

                switch (opciones) {
                    case "1":
                        sumarServicios();
                        break;

                    case "2":
                        {
                            alert("¡Muchas gracias por elejirnos! enviaremos el detalle al mail suministrado.");
                            break;
                        }

                    default:
                        {
                            alert("Opción invalida");
                            break;
                        }
                }


            }
            while (i >= 0 && i < 3);

            const servicios = ["Traslado", "Alojamiento", "Media-pensión", "Guia-turistico"];
            function sumarServicios() {
                const pedirservicios = prompt("Suma un servicio adicional: Excursiones, Fiestas, Piscina");
                servicios.push(pedirservicios);
                console.log(servicios);
                alert(`Se ha sumado el siguiente servicio a su paquete: ${pedirservicios}`);
            };

        }
        

    const nodoHoteles=document.getElementById("Hoteles-reserv");
        nodoHoteles.onclick=  function hotelesDisponibles()
        {   
            let hotelbuscado= prompt("Ingrese el hotel que desea");
            const hoteles = ["Santa Rita","Las termas","San Ignacio","Gold Season"];
            const busqueda= hoteles.find ((hotel)=> hotel.nombre.includes(hotelbuscado))
            console.log(busqueda)
        }
        ; 
        
       

        
 
}



function validacionFormulario(){
    const form= document.getElementById("form-reservas");
        form.setAttribute("style","display:grid; justify-items: center; margin:20px;")
          elementos= form.elements; 

    const validarCampos = function(i){
            validarNombre(i);
            validarEmail(i);
            validarTel(i);
            validarDireccion(i);
        }
          form.addEventListener("submit",validarCampos)


    function validarNombre(i){
        controlBotones(boton)
    };

    function validarEmail(i){
        controlBotones(boton)
    };

    function validarTel(i){
        controlBotones(boton)
    };

    function validarDireccion(i){
        controlBotones(boton)
    };

    tocarBotones();

}

function controlBotones(boton)
    {
        if (boton === null)
            {
                alert("Debe completar todos los campos")
            }

    };

function tocarBotones()
{  const boton= document.getElementById("inputEnviar");
    boton.onclick = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu reserva a sido registrada',
        showConfirmButton: false,
        timer: 1500
    })
}
}

  

// backoffice

function cargarDatosHabitacion(){
        const id = prompt("Ingrese el ID de su habitacion");
        const medida = prompt(" elija una medida");
        const tipoDeCama = prompt("tipoDeCama");
        const hab1 = new Habitacion(id, medida,tipoDeCama, true);
        console.log(hab1);
    };
    
    
            
function Transporte(id,tipoDeTransporte,tipoDeAsiento){
        this.id=id;
        this.tipoDeTransporte=tipoDeTransporte;
        this.tipoDeAsiento=tipoDeAsiento;
        };
            

function cargarDatosTransporte()
    {
        const id=prompt("Ingrese el ID de su transporte");
        const tipoDeTransporte=prompt("Ingrese el transporte que prefiere (Micro o Avion)");
        const tipoDeAsiento= prompt("Ingrese el tipo de asiento (Cama o Semi-cama)");

        const transporte1 = new Transporte(id, tipoDeTransporte, tipoDeAsiento, true);
        console.log (transporte1);
    }
