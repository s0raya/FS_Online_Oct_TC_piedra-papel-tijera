# 🎮 Juego de Piedra, Papel, Tijera, Lagarto, Spock

Este es un juego clásico con una variante extendida inspirada en "The Big Bang Theory": **Piedra, Papel, Tijera, Lagarto, Spock**. Está desarrollado con **HTML, CSS y JavaScript**, permitiendo a los jugadores enfrentarse contra la computadora en un duelo de lógica y suerte. 

---

## 🚀 Características

✅ Interfaz interactiva y dinámica<br>
✅ Jugabilidad intuitiva con botones para elegir "Piedra", "Papel", "Tijera", "Lagarto" o "Spock"<br>
✅ Generación aleatoria de jugadas por parte de la computadora<br>
✅ Comparación automática de jugadas y determinación del ganador según las reglas ampliadas<br>
✅ Contador de puntuaciones en tiempo real para usuario y computadora

---

## 🛠️ Tecnologías utilizadas

- **HTML** → Estructura del juego
- **CSS** → Estilización de los elementos para mejorar la experiencia visual
- **JavaScript** → Lógica del juego y manipulación del DOM

---

## 🎲 ¿Cómo jugar?

1️⃣ Selecciona tu jugada haciendo clic en "Piedra", "Papel", "Tijera", "Lagarto" o "Spock".<br>
2️⃣ La computadora generará una jugada aleatoria automáticamente.<br>
3️⃣ Se compararán ambas elecciones y se determinará el ganador según las reglas:<br>
   - **Piedra** aplasta a **Tijera** y aplasta a **Lagarto** 🪨✂️🦎
   - **Papel** cubre a **Piedra** y refuta a **Spock** 📄🪨🖖
   - **Tijera** corta a **Papel** y decapita a **Lagarto** ✂️📄🦎
   - **Lagarto** envenena a **Spock** y devora a **Papel** 🦎🖖📄
   - **Spock** rompe a **Tijera** y vaporiza a **Piedra** 🖖✂️🪨
4️⃣ Se actualizará el marcador con el resultado de la partida.<br>

🔁 ¡Sigue jugando tantas veces como quieras y desafía a la computadora!

---

## 🔧 Código y estructura

La lógica del juego sigue esta estructura:

📌 **Variables principales**
- Lista de opciones disponibles (`piedra`, `papel`, `tijera`, `lagarto`, `spock`).
- Contadores de puntuación para el usuario y la computadora.

📌 **Eventos y funciones clave**
- Captura de los botones mediante `querySelectorAll` y aplicación de eventos `click`.
- Generación aleatoria de la jugada de la computadora con `Math.random()`.
- Comparación de jugadas y determinación del ganador según las reglas expandidas.
- Actualización del marcador y visualización del resultado.

---

## 📌 Próximas mejoras

🔹 Añadir animaciones para transiciones más fluidas.<br>
🔹 Incluir sonidos al hacer clic en las opciones.<br>
🔹 Implementar un modo multijugador local.<br>

---

## 📜 Licencia

Este proyecto es de código abierto. ¡Siéntete libre de modificarlo y mejorarlo! 🚀