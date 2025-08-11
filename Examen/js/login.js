document.addEventListener('DOMContentLoaded', () => {
  // Crear modal login dinámicamente (igual que antes)
  const modalHtml = `
    <div id="loginModal" style="
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.5); display: none; justify-content: center; align-items: center;
      z-index: 2000;
    ">
      <div style="
        background: white; padding: 20px; border-radius: 8px; max-width: 400px; width: 90%;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
        <h3 style="margin-top:0; color: #4caf50;">Login</h3>
        <label for="loginUser">Usuario:</label><br>
        <input id="loginUser" type="text" placeholder="Ingrese su usuario" style="width: 100%; margin-bottom:10px; padding: 6px;" /><br>
        <label for="loginPass">Contraseña:</label><br>
        <input id="loginPass" type="password" placeholder="Ingrese su contraseña" style="width: 100%; margin-bottom: 15px; padding: 6px;" /><br>
        <button id="btnLoginSubmit" style="background: #4caf50; color: white; border:none; padding: 8px 16px; cursor: pointer;">Iniciar</button>
        <button id="btnLoginCancel" style="margin-left:10px; padding: 8px 16px; cursor:pointer;">Cancelar</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const loginModal = document.getElementById('loginModal');
  const btnLoginSubmit = document.getElementById('btnLoginSubmit');
  const btnLoginCancel = document.getElementById('btnLoginCancel');
  const loginUser = document.getElementById('loginUser');
  const loginPass = document.getElementById('loginPass');

  // Botón para abrir modal
  const btnShowLogin = document.getElementById('btnShowLogin');
  btnShowLogin.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    loginUser.focus();
  });

  btnLoginCancel.addEventListener('click', () => {
    loginModal.style.display = 'none';
    limpiar();
  });

  function validation_alert(ptext) {
    Swal.fire({
      title: "Verificar la entrada de datos",
      text: ptext,
      confirmButtonText: "Intentar de nuevo",
      confirmButtonColor: "#8b0000",
      html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/361dce4f-7dd0-47e9-9fdb-ac0c44caf48a/NbFBuF0ZSG.lottie"></iframe><br><p>' + ptext + '</p>',
    });
  }

  function limpiar() {
    loginUser.value = "";
    loginPass.value = "";
  }

  function login() {
    let user_input = loginUser.value.trim();
    let pass_input = loginPass.value.trim();
    let username = "cenfo";
    let password = "123";

    let input = [user_input, pass_input];
    let input_id = [loginUser, loginPass];
    let error_count = 0;
    let text = "";

    // Remueve clase error
    input_id.forEach(inputEl => inputEl.classList.remove('error'));

    // Validar campos vacíos
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "") {
        text = "Los campos requeridos NO pueden estar vacios.";
        validation_alert(text);
        input_id[i].classList.add("error");
        error_count++;
      }
    }

    if (error_count === 0) {
      if (user_input === username && pass_input === password) {
        Swal.fire({
          title: "Bienvenido",
          showConfirmButton: false,
          customClass: { title: 'formatos1' },
          timer: 3000,
          html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/e0cea1bf-4cab-4188-99ae-a6ad67b7add5/0Ee63vC4yi.lottie"></iframe><br><br><p>Esperar un momento...</p>',
        }).then(() => {
          // Cerrar modal y guardar estado
          loginModal.style.display = 'none';
          limpiar();
          localStorage.setItem('loggedInUser', user_input);
          showLoggedIn(user_input);
        });
      } else {
        text = "Usuario o contraseña incorrecta.";
        validation_alert(text);
      }
    }
  }

  btnLoginSubmit.addEventListener('click', login);

  // Mostrar estado logueado en botón
  function showLoggedIn(user) {
    btnShowLogin.textContent = `Hola, ${user} (Salir)`;
    btnShowLogin.style.background = '#4caf50';
    btnShowLogin.style.color = 'white';

    // Cambiar función para logout
    btnShowLogin.onclick = () => {
      localStorage.removeItem('loggedInUser');
      btnShowLogin.textContent = 'Login';
      btnShowLogin.style.background = '';
      btnShowLogin.style.color = '';
      btnShowLogin.onclick = null;
      btnShowLogin.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        loginUser.focus();
      });
      Swal.fire('Has cerrado sesión.');
    }
  }

  // Verificar si ya hay usuario logueado
  const savedUser = localStorage.getItem('loggedInUser');
  if (savedUser) {
    showLoggedIn(savedUser);
  }
});
