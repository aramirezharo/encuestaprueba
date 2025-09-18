const form = document.getElementById('encuestaForm');
const mensajeExito = document.getElementById('mensajeExito');

// Tu URL del Apps Script (asegúrate que termina en /exec)
const appScriptURL = 'https://script.google.com/macros/s/AKfycbzYBuQa19EClr1uyIbyPJfY9pqcXoRCQec_Y_EgIVLGG_Xgm6A1adiRmur7N_oepeg/exec';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch(appScriptURL, {
        method: 'POST',
        mode: 'no-cors',  // Obligatorio por CORS de Google
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(() => {
        // Siempre asume éxito porque no puedes leer la respuesta
        form.style.display = 'none';
        mensajeExito.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    });
});
