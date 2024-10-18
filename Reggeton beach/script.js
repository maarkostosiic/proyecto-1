// Pedir el nombre del usuario cuando entra en la página
window.onload = function() {
    const nombreUsuario = prompt("¡Bienvenido al Festival! ¿Cuál es tu nombre?");
    if (nombreUsuario) {
        document.getElementById('bienvenida').innerHTML = `<h2>¡Hola, ${nombreUsuario}! Bienvenido al Festival de Música 2024</h2>`;
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
