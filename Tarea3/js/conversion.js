function calcularConversion() {
  const tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
  const conversion = document.querySelector('input[name="conversion"]:checked').value;
  const colones = parseFloat(document.getElementById("colones").value);
  const dolares = parseFloat(document.getElementById("dolares").value);

  if (isNaN(tipoCambio) || tipoCambio <= 0) {
    Swal.fire("Error", "Ingrese un tipo de cambio válido.", "error");
    return;
  }

  let resultado = "";

  if (conversion === "c_to_d") {
    if (isNaN(colones) || colones <= 0) {
      Swal.fire("Error", "Ingrese el monto en colones.", "error");
      return;
    }
    const calcDolares = colones / tipoCambio;
    resultado = `₡${colones.toFixed(2)} equivalen a $${calcDolares.toFixed(2)} al tipo de cambio de ₡${tipoCambio}.`;
  } else {
    if (isNaN(dolares) || dolares <= 0) {
      Swal.fire("Error", "Ingrese el monto en dólares.", "error");
      return;
    }
    const calcColones = dolares * tipoCambio;
    resultado = `$${dolares.toFixed(2)} equivalen a ₡${calcColones.toFixed(2)} al tipo de cambio de ₡${tipoCambio}.`;
  }

  document.getElementById("conversionResultado").innerText = resultado;
  document.getElementById("resultadoConversion").style.display = "block";
}

function limpiarConversor() {
  document.getElementById("conversorForm").reset();
  document.getElementById("resultadoConversion").style.display = "none";
}
