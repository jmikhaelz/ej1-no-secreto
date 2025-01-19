# Adivina mi Número Secreto

## Descripción
"Adivina mi Número Secreto" es un juego interactivo donde el jugador debe adivinar un número secreto generado aleatoriamente por la computadora. El juego proporciona pistas para ayudar al jugador a acercarse al número correcto.

## Tecnologías Utilizadas
- **HTML**: Estructura del contenido del juego.
- **CSS**: Estilos y diseño visual del juego.
- **JavaScript**: Lógica del juego y manejo de eventos.

## Estructura del Proyecto
El proyecto está compuesto por los siguientes archivos:
- `index.html`: Contiene la estructura básica del juego.
- `style.css`: Define los estilos y el diseño visual del juego.
- `app.js`: Contiene la lógica del juego y los procesos necesarios para su funcionamiento.

## Cómo Jugar
1. Abre el archivo `index.html` en tu navegador web.
2. Introduce un número en el campo de entrada y haz clic en el botón "Adivinar".
3. El juego te dará pistas sobre si el número secreto es mayor o menor que tu suposición.
4. Continúa adivinando hasta que encuentres el número secreto.

## Ejemplo de Código
Aquí tienes un fragmento del código JavaScript que maneja la lógica del juego:

```javascript logica de numero secreto
// Generar un número secreto aleatorio
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Función para manejar la adivinanza del jugador
function adivinarNumero() {
    const numeroJugador = parseInt(document.getElementById('inputNumero').value);
    let mensaje = '';

    if (numeroJugador === numeroSecreto) {
        mensaje = '¡Felicidades! Has adivinado el número secreto.';
    } else if (numeroJugador < numeroSecreto) {
        mensaje = 'El número secreto es mayor.';
    } else {
        mensaje = 'El número secreto es menor.';
    }

    document.getElementById('mensaje').textContent = mensaje;
}
