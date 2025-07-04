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

document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();

  if (!nombre || !email || !fechaNacimiento) {
    validation_alert("Por favor complete todos los campos obligatorios, incluyendo la fecha de nacimiento.");
    return; // no continuar si hay error
  }

  // Si pasa validación, sigue con guardar usuario...
  // Aquí tu código para guardar y mostrar usuarios
  // ...
});
