const jugada = document.querySelectorAll('.boton-jugada');
const resultado = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

let puntosOrdenador = 0;
let puntosUsuario = 0;

const reglas = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["spock", "papel"],
    spock: ["tijera", "piedra"]
}

function resultadoRonda(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) return "empate";
    if (reglas[jugadaUsuario].includes(jugadaMaquina)) return "usuario";
    return "maquina"
}

function mostrarResultado(a, b, ganador){
    let mensaje = `El usuario ha elegido ${a} y el ordenador ${b}, por lo tanto: `

    if (ganador === "empate") mensaje += "Empate";
    else if (ganador === "usuario") mensaje += "Gana el usuario";
    else mensaje += "Gana la máquina";

    resultado.textContent = mensaje;
};

function actualizarPuntuacion(ganador) {
    if (ganador === "usuario") puntosUsuario++;
    else if (ganador === "maquina") puntosOrdenador++;

    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
};


function jugadaAleatoria() {
    return opciones[Math.floor(Math.random() * opciones.length)];
};

//Crear una función obtenerResultado

jugada.forEach(boton => {
    boton.addEventListener('click', () => {
        let jugadaUsuario = boton.dataset.jugada;
        let jugadaMaquina = jugadaAleatoria();

        const ganador = resultadoRonda(jugadaUsuario, jugadaMaquina);

        actualizarPuntuacion(ganador);
        mostrarResultado(jugadaUsuario, jugadaMaquina, ganador);
    });
});

