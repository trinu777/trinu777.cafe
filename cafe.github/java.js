document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Aquí podrías agregar lógica para enviar los datos a un servidor

    // Muestra un mensaje de respuesta
    document.getElementById('responseMessage').innerText = `Gracias, ${name}. Tu mensaje ha sido enviado.`;
    
    // Limpia el formulario
    document.getElementById('contactForm').reset();
});