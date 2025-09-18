const form = document.getElementById('encuestaForm');
const mensajeExito = document.getElementById('mensajeExito');

// Asegúrate de que esta URL sea la correcta y termine en /exec
const appScriptURL = 'https://script.google.com/macros/s/AKfycbzYBuQa19EClr1uyIbyPJfY9pqcXoRCQec_Y_EgIVLGG_Xgm6A1adiRmur7N_oepeg/exec'; 

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    // Enviar datos al script de Google Apps Script
    fetch(appScriptURL, {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar problemas de CORS
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify(data),
    })
    .then(response => {
        // En modo 'no-cors', la respuesta siempre será 'ok', así que ocultamos el formulario directamente.
        form.style.display = 'none';
        mensajeExito.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    });
});
