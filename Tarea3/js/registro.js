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
    confirmButtonColor: "#8b0000",
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidDate(dateStr) {
  const date = new Date(dateStr);
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(dateStr) &&
    date instanceof Date &&
    !isNaN(date.getTime())
  );
}

// Memoria en JS (array)
const usuarios = [];

document.getElementById("registroForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();

  // Validaciones
  if (!nombre || !email || !fechaNacimiento) {
    validation_alert("Por favor complete todos los campos obligatorios.");
    return;
  }

  if (!isValidEmail(email)) {
    validation_alert("Ingrese un correo electrónico válido.");
    return;
  }

  if (!isValidDate(fechaNacimiento)) {
    validation_alert("Ingrese una fecha de nacimiento válida en formato YYYY-MM-DD.");
    return;
  }

  // Guardar usuario en memoria
  usuarios.push({ nombre, email, fechaNacimiento });

  // Actualizar combo
  const lista = document.getElementById("listaUsuarios");
  const opcion = document.createElement("option");
  opcion.value = usuarios.length - 1;
  opcion.textContent = nombre;
  lista.appendChild(opcion);

  // Limpiar formulario
  this.reset();

  // Ocultar detalle usuario
  document.getElementById("detalleUsuario").innerHTML = "";
});

document.getElementById("listaUsuarios").addEventListener("change", function () {
  const index = this.value;
  const detalle = document.getElementById("detalleUsuario");

  if (index === "") {
    detalle.innerHTML = "";
    return;
  }

  const usuario = usuarios[index];
  detalle.innerHTML = `
    <p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Correo:</strong> ${usuario.email}</p>
    <p><strong>Fecha de nacimiento:</strong> ${usuario.fechaNacimiento}</p>
  `;
});
