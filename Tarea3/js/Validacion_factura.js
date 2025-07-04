function validation_alert(ptext) {
  Swal.fire({
    title: "Verificar la entrada de datos",
    html: `
      <iframe 
        width="320" 
        height="240" 
        frameborder="0" 
        src="https://lottie.host/embed/361dce4f-7dd0-47e9-9fdb-ac0c44caf48a/NbFBuF0ZSG.lottie">
      </iframe>
      <br>
      <p>${ptext}</p>
    `,
    confirmButtonText: "Intentar de nuevo",
    confirmButtonColor: "#8b0000"
  });
}

function generarFactura() {
  const cliente = document.getElementById("cliente").value.trim();
  const articulo = document.getElementById("articulo").value.trim();
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  // Validar campos vacíos
  if (!cliente || !articulo || isNaN(cantidad) || isNaN(precio)) {
    validation_alert("Por favor, complete todos los campos antes de generar la factura.");
    return;
  }

  const subtotal = cantidad * precio;
  const iva = subtotal * 0.13;
  const servicio = subtotal * 0.05;
  const total = subtotal + iva + servicio;

  // Mostrar resultados
  document.getElementById("rCliente").innerText = cliente;
  document.getElementById("rArticulo").innerText = articulo;
  document.getElementById("rCantidad").innerText = cantidad;
  document.getElementById("rPrecio").innerText = precio.toFixed(2);
  document.getElementById("rSubtotal").innerText = subtotal.toFixed(2);
  document.getElementById("rIVA").innerText = iva.toFixed(2);
  document.getElementById("rServicio").innerText = servicio.toFixed(2);
  document.getElementById("rTotal").innerText = total.toFixed(2);

  document.getElementById("resultado").style.display = "block";
}

function limpiarFormulario() {
  document.getElementById("facturaForm").reset();
  document.getElementById("resultado").style.display = "none";
}