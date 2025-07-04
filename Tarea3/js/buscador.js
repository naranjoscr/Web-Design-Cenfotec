const empleados = {
  "109110338": {
    nombre: "Juan",
    apellidos: "Pérez",
    lugar: "San José",
    foto: "imagenes/juan.jpg"
  },
  "209110338": {
    nombre: "María",
    apellidos: "Gómez",
    lugar: "Alajuela",
    foto: "imagenes/maria.jpg"
  },
  "309110338": {
    nombre: "Carlos",
    apellidos: "Rodríguez",
    lugar: "Cartago",
    foto: "imagenes/carlos.jpg"
  },
  "409110338": {
    nombre: "Ana",
    apellidos: "López",
    lugar: "Heredia",
    foto: "imagenes/ana.jpg"
  },
  "509110338": {
    nombre: "Luis",
    apellidos: "Fernández",
    lugar: "Limón",
    foto: "imagenes/luis.jpg"
  }
};

function mostrarAlertaError(mensaje) {
  Swal.fire({
    title: "Error",
    html: `
      <iframe
        src="https://lottie.host/embed/361dce4f-7dd0-47e9-9fdb-ac0c44caf48a/NbFBuF0ZSG.lottie"
        width="280" height="210" frameborder="0" allowfullscreen
        style="display: block; margin: 0 auto 15px auto;">
      </iframe>
      <p style="margin: 0 auto; max-width: 320px; font-size: 1rem; line-height: 1.3; color:#222;">
        ${mensaje}
      </p>
    `,
    confirmButtonText: "Intentar de nuevo",
    confirmButtonColor: "#8b0000",
    width: 380,
    padding: "1.5em"
  });
}

function buscarEmpleado() {
  const cedula = document.getElementById("cedula").value.trim();
  const resultadoDiv = document.getElementById("resultadoEmpleado");
  resultadoDiv.innerHTML = "";

  if (cedula === "") {
    mostrarAlertaError("Debe ingresar un número de cédula.");
    return;
  }

  if (empleados.hasOwnProperty(cedula)) {
    const emp = empleados[cedula];
    resultadoDiv.innerHTML = `
      <h3>${emp.nombre} ${emp.apellidos}</h3>
      <p><strong>Lugar:</strong> ${emp.lugar}</p>
      <img src="${emp.foto}" alt="Foto de ${emp.nombre}" />
    `;
  } else {
    resultadoDiv.innerHTML = `<p style="color:#b00000; font-weight:bold;">El usuario NO existe.</p>`;
  }
}
