window.onload = function() {
    // Verificar si el nombre ya está almacenado en localStorage
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (!nombreGuardado) {
        const nombreUsuario = prompt("¡Bienvenido al Festival! ¿Cuál es tu nombre?");
        if (nombreUsuario) {
            localStorage.setItem('nombreUsuario', nombreUsuario); // Guardar el nombre en localStorage
            document.getElementById('bienvenida').innerHTML = `<h2>¡Hola, ${nombreUsuario}! Bienvenido al Festival de Música 2024</h2>`;
        }
    } else {
        // Mostrar el saludo si ya hay un nombre guardado
        document.getElementById('bienvenida').innerHTML = `<h2>¡Hola, ${nombreGuardado}! Bienvenido al Festival de Música 2024</h2>`;
    }
}

// Confirmación al enviar el formulario
document.getElementById('compraEntradas').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    const confirmacion = confirm("¿Estás seguro de que quieres comprar las entradas?");
    if (confirmacion) {
        alert("¡Gracias por tu compra!");
        console.log("Entradas compradas con éxito");
    }
});
;
