// 1. Selección de elementos del DOM
console.log("Práctica de DOM e Inicio de Git - Juan Ramón García Morales");
const emailInput = document.getElementById('emailInput');
const btnGenerar = document.getElementById('btnGenerar');
const resultadoContenedor = document.getElementById('resultadoContenedor');
const tokenOutput = document.getElementById('tokenOutput');

const alumno = "Soy Ramon Garcia y mi programa termino a las: ";
const fecha = new Date(); // <--- Corregido: Lleva espacio obligatorio

// 2. Escuchar el evento de clic en el botón
btnGenerar.addEventListener('click', () => {
    const correo = emailInput.value.trim();

    // Validación simple mediante el DOM
    if (correo === "" || !correo.includes('@')) {
        alert("Por favor, introduce un correo electrónico válido.");
        console.error("No pusiste arroba, ponte pilas");
        return;
    }

    // 3. Lógica para generar el token equivalente
    const salt = "TOKEN_KEY_2026_";
    const timestamp = Date.now();
    const tokenSimulado = btoa(`${salt}${correo}_${timestamp}`);

    // 4. Manipulación del DOM para mostrar el resultado
    tokenOutput.textContent = tokenSimulado;

    // Removemos la clase 'hidden' para que el contenedor sea visible
    resultadoContenedor.classList.remove('hidden');

    // Cambiamos el estilo dinámicamente mediante el DOM
    tokenOutput.style.backgroundColor = "#e8f8f5"; 
    tokenOutput.style.borderLeftColor = "#2ecc71"; 

    // Muestra en la consola tu nombre y la hora exacta en la que se generó el token
    console.log(alumno + fecha.toLocaleTimeString()); // <--- Corregido
});