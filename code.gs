function doGet(e) {
  // Esto sirve tu index.html como frontend
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Encuesta de Calidad");
}

function guardarRespuesta(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Respuestas");
  
  if (!sheet) {
    sheet = ss.insertSheet("Respuestas");
    sheet.appendRow([
      "P1. Limpieza",
      "P2. Atención",
      "P3. Precio",
      "P4. Facilidad",
      "P5. Variedad",
      "P6. Presentación",
      "P7. Calidad",
      "Fecha y Hora"
    ]);
  }
  
  var answers = [
    data.p1 || "",
    data.p2 || "",
    data.p3 || "",
    data.p4 || "",
    data.p5 || "",
    data.p6 || "",
    data.p7 || "",
    new Date()
  ];
  
  sheet.appendRow(answers);
}

