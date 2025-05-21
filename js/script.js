const jugada = document.querySelectorAll('.boton-jugada');
const resultado = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

let puntosOrdenador = 0;
let puntosUsuario = 0;

function mostrarResultado(a, b){
    resultado.innerHTML = `El usuario ha elegido ${a} y el ordenador ${b}`
};

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
};


function jugadaAleatoria(minimo, maximo) {
    return opciones[Math.floor(Math.random() * (maximo - minimo) + minimo)];
};

//Crear una función obtenerResultado

jugada.forEach(function obtenerResultado(boton){
    boton.addEventListener('click',function() {
        let jugadaUsuario = this.dataset.jugada;
        let jugadaMaquina = jugadaAleatoria(0,3);
        actualizarPuntuacion(jugadaUsuario,jugadaMaquina);
        mostrarResultado(jugadaUsuario, jugadaMaquina);
    });
});

