let nroMagico = 0;

let btnComenzar = document.getElementById("btnComenzar");

function comenzarJuego() {
    alert.className = "d-none";
    nroMagico = Math.floor(Math.random()*100)+ 1;
    console.log(`Inicio del juego. ${this.nroMagico}`);


    
    let formJuego = document.querySelector('#formJuego');
    formJuego.reset();
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function consultarNro(e) {
    e.preventDefault();
    let mensaje = document.getElementById("msj");
    if (numeroIngresado == nroMagico) {
        mensaje.className = 'alert alert-primary';
        mensaje.innerHTML = 'Adivinaste!!';
        btnComenzar.disabled = false;
    } else if (numeroIngresado > nroMagico) {

        mensaje.className = 'alert alert-info';
        mensaje.innerHTML = 'vuelve a intentarlo, el numero magico es menor al nro ingresado :/';
    } else {
        mensaje.className = 'alert alert-info';
        mensaje.innerHTML = "Vuelve a intentarlo, el nro ingresado es mayor al nro ingresado";
        
    }
}