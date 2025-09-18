function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Respuestas");
    
    if (!sheet) {
      sheet = ss.insertSheet("Respuestas");
      sheet.appendRow(["P1. Limpieza", "P2. Atención", "P3. Precio", "P4. Facilidad", "P5. Variedad", "P6. Presentación", "P7. Calidad", "Fecha y Hora"]);
    }
    
    // Analizar los datos JSON enviados en la solicitud POST
    var data = JSON.parse(e.postData.contents);
    var answers = [
      data.p1,
      data.p2,
      data.p3,
      data.p4,
      data.p5,
      data.p6,
      data.p7
    ];
    
    var timestamp = new Date();
    answers.push(timestamp);
    
    sheet.appendRow(answers);
    
    // Devolver una respuesta para el cliente (Vercel)
    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
