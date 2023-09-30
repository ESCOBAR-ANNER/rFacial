function actualizarTarjetas() {
    const tarjetasContainer = document.getElementById("tarjetasContainer");

    // Limpia el contenedor de tarjetas
    tarjetasContainer.innerHTML = '';

    nombres.forEach((nombre) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        const nombreElement = document.createElement("p");
        nombreElement.classList.add("nombre");
        nombreElement.textContent = nombre;

        const imagenElement = document.createElement("img");
        imagenElement.classList.add("imagen");
        imagenElement.src = `fotos2/${nombre}.jpg`; // Cambia la ruta de la imagen según tu estructura de archivos

        const contadorElement = document.createElement("p");
        contadorElement.classList.add("contador");
        contadorElement.textContent = `Asistencias: ${contadores[nombre] || 0}`;

        tarjeta.appendChild(nombreElement);
        tarjeta.appendChild(imagenElement);
        tarjeta.appendChild(contadorElement);

        tarjetasContainer.appendChild(tarjeta);
    });
}

// Llama a la función para actualizar las tarjetas
actualizarTarjetas();
