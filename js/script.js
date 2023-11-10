const jugada= document.getElementsByClassName("boton-jugada");

//Creada una constante con Opciones en un array
const opciones= ["piedra", "papel", "tijera"];

//Creada una constante con Variables puntos ordenador
var puntosOrdenador=0;

//Creada una constante con Variables puntos usuario
var puntosUsuario=0;

//Capturar resultados
const resultado =document.getElementById("resultados");

//Capturar contador-usuario
const contadorUsuario=document.getElementById("contador-usuario");

//Capturar contador-ordenador
const contadorOrdenador =document.getElementById("contador-ordenador");


//Crear una función mostrarResultado
function mostrarResultado(a, b){
    resultado.innerHTML = `El usuario ha elegido ${a} y el ordenador ${b}`
};

// Crear una función actualizarPuntuacion
function actualizarPuntuacion(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === 'piedra' && jugadaMaquina === 'papel'){
        puntosOrdenador++;
    }else if (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera') {
        puntosUsuario++;
    }else if (jugadaUsuario === 'papel' && jugadaMaquina === 'piedra') {
        puntosUsuario++;
    } else if (jugadaUsuario === 'papel' && jugadaMaquina === 'tijera') {
        puntosOrdenador++;
    }else if (jugadaUsuario === 'tijera' && jugadaMaquina === 'piedra') {
        puntosUsuario++;
    } else if (jugadaUsuario === 'tijera' && jugadaMaquina === 'papel') {
        puntosUsuario++;
    }else if (jugadaUsuario === 'lagarto' && jugadaMaquina === 'piedra') {
        puntosOrdenador++;
    } else if (jugadaUsuario === 'lagarto' && jugadaMaquina === 'papel') {
        puntosUsuario++;
    } else if (jugadaUsuario === 'lagarto' && jugadaMaquina === 'tijera') {
        puntosOrdenador++;
    }else if (jugadaUsuario === 'lagarto' && jugadaMaquina === 'spock') {
        puntosUsuario++;
    }else if (jugadaUsuario === 'spock' && jugadaMaquina === 'piedra') {
        puntosUsuario++;
    } else if (jugadaUsuario === 'spock' && jugadaMaquina === 'papel') {
        puntosOrdenador++;
    }else if (jugadaUsuario === 'spock' && jugadaMaquina === 'tijera') {
        puntosUsuario++;
    } else if (jugadaUsuario === 'spock' && jugadaMaquina === 'lagarto') {
        puntosOrdenador++;
    }
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}

//Utilizar Math.random()?

function jugadaAleatoria(minimo, maximo) {
    return opciones[Math.floor(Math.random() * (maximo - minimo) + minimo)];
}

//Capturar los botones para usarlos (plantea usar un forEach) y hacer evento click
//Crear una función obtenerResultado

Array.from(jugada).forEach(function obtenerResultado(elemento) {
    elemento.addEventListener('click',function() {
        let jugadaUsuario = this.getAttribute('data-jugada');
        let jugadaMaquina = jugadaAleatoria(0,3);
        actualizarPuntuacion(jugadaUsuario,jugadaMaquina);
        mostrarResultado(jugadaUsuario, jugadaMaquina);
    })
});
