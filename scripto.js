const form = document.getElementById('encuestaForm');
const mensajeExito = document.getElementById('mensajeExito');

// Reemplaza esta URL con la URL de tu aplicación web de Google Apps Script
const appScriptURL = 'https://script.google.com/macros/s/AKfycbzYBuQa19EClr1uyIbyPJfY9pqcXoRCQec_Y_EgIVLGG_Xgm6A1adiRmur7N_oepeg/exec'; 

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Enviar datos al script de Google Apps Script
    fetch(appScriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.style.display = 'none'; // Oculta el formulario
            mensajeExito.style.display = 'block'; // Muestra el mensaje de éxito
        } else {
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    });
});

