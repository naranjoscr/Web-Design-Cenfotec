// js/translate.js
(function(){
  const translations = {
    es: {
      "nav.about": "Sobre Nosotros",
      "nav.contact": "Contacto",
      "nav.gallery": "Galería",
      "nav.subscribe": "Suscripción",
      "nav.discover": "Descubra Costa Rica",
      "nav.vote": "Votación de la comunidad",
      "nav.testimonials": "Testimonios",
      "nav.externalResources": "Recursos externos",
      "nav.tourFinder": "Buscador de Tours",
      "banner.subtitle": "Turismo Interactivo y recomendaciones de viaje",
      "about.title": "Sobre Nosotros",
      "about-p1": "Perezosos Pura vida es una empresa de turismo con soluciones inmersivas a sus vacaciones...",
      "about-p2": "1: Puede seleccionar la experiencia inmersiva o agendar una cita de 20 minutos sin costo...",
      "about-p3": "2: También puede dejarnos su correo electrónico de contacto...",
      "buttons.virtualTour": "Tour Virtual",
      "buttons.book": "Agendar Cita",
      "buttons.email": "Correo electrónico",
      "gallery.title": "Costa Rica"
    },
    en: {
      "nav.about": "About Us",
      "nav.contact": "Contact",
      "nav.gallery": "Gallery",
      "nav.subscribe": "Subscription",
      "nav.discover": "Discover Costa Rica",
      "nav.vote": "Community Voting",
      "nav.testimonials": "Testimonials",
      "nav.externalResources": "External Resources",
      "nav.tourFinder": "Tour Finder",
      "banner.subtitle": "Interactive Tourism and Travel Recommendations",
      "about.title": "About Us",
      "about-p1": "Perezosos Pura Vida is a tourism company offering immersive solutions...",
      "about-p2": "1: You can choose the immersive experience or book a free 20-minute appointment...",
      "about-p3": "2: You can also leave us your email and we will gladly send you more information...",
      "buttons.virtualTour": "Virtual Tour",
      "buttons.book": "Book Appointment",
      "buttons.email": "Email",
      "gallery.title": "Costa Rica"
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('langToggle');
    const elems = document.querySelectorAll('[data-translate]');
    const btnShowLogin = document.getElementById('btnShowLogin');

    function applyLang(lang){
      elems.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (!key) return;
        const text = translations[lang] && translations[lang][key];
        if (text === undefined) return;
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      });

      if (!localStorage.getItem('loggedInUser')) {
        btnShowLogin.textContent = translations[lang]["login.button"];
      } else {
        const user = localStorage.getItem('loggedInUser');
        btnShowLogin.textContent = translations[lang]["login.greeting"] + user + translations[lang]["login.logout"];
      }

      document.documentElement.lang = lang;
      localStorage.setItem('siteLang', lang);
    }

    const saved = localStorage.getItem('siteLang') || 'es';
    toggle.checked = (saved === 'en');
    applyLang(saved);

    toggle.addEventListener('change', () => {
      const lang = toggle.checked ? 'en' : 'es';
      applyLang(lang);
    });

    // Login modal controls
    const loginModal = document.getElementById('loginModal');
    const btnLoginSubmit = document.getElementById('btnLoginSubmit');
    const btnLoginCancel = document.getElementById('btnLoginCancel');
    const loginUser = document.getElementById('loginUser');
    const loginPass = document.getElementById('loginPass');

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
      loginUser.classList.remove('error');
      loginPass.classList.remove('error');
    }

    function showLoggedIn(user) {
      const lang = localStorage.getItem('siteLang') || 'es';
      btnShowLogin.textContent = translations[lang]["login.greeting"] + user + translations[lang]["login.logout"];
      btnShowLogin.style.background = '#d9534f';
      btnShowLogin.style.color = 'white';

      btnShowLogin.onclick = () => {
        localStorage.removeItem('loggedInUser');
        btnShowLogin.textContent = translations[lang]["login.button"];
        btnShowLogin.style.background = '#4caf50';
        btnShowLogin.style.color = 'white';
        btnShowLogin.onclick = openLoginModal;
        Swal.fire('Has cerrado sesión.');
      };
    }

    function login() {
      let user_input = loginUser.value.trim();
      let pass_input = loginPass.value.trim();
      let username = "cenfo";
      let password = "123";

      let input = [user_input, pass_input];
      let inputEl = [loginUser, loginPass];
      let error_count = 0;

      inputEl.forEach(el => el.classList.remove('error'));

      for (let i = 0; i < input.length; i++) {
        if (input[i] === "") {
          validation_alert("Los campos requeridos NO pueden estar vacios.");
          inputEl[i].classList.add('error');
          error_count++;
        }
      }
      if (error_count > 0) return;

      if (user_input === username && pass_input === password) {
        Swal.fire({
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 3000,
          html: '<iframe width="320" height="240" frameborder="0" src="https://lottie.host/embed/e0cea1bf-4cab-4188-99ae-a6ad67b7add5/0Ee63vC4yi.lottie"></iframe><br><br><p>Esperar un momento...</p>',
        }).then(() => {
          loginModal.style.display = "none";
          limpiar();
          localStorage.setItem('loggedInUser', user_input);
          showLoggedIn(user_input);
        });
      } else {
        validation_alert("Usuario o contraseña incorrecta.");
      }
    }

    function openLoginModal() {
      loginModal.style.display = 'flex';
      loginModal.setAttribute('aria-hidden', 'false');
      loginUser.focus();
    }

    btnShowLogin.addEventListener('click', openLoginModal);
    btnLoginCancel.addEventListener('click', () => {
      loginModal.style.display = 'none';
      loginModal.setAttribute('aria-hidden', 'true');
      limpiar();
    });
    btnLoginSubmit.addEventListener('click', login);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && loginModal.style.display === 'flex') {
        loginModal.style.display = 'none';
        loginModal.setAttribute('aria-hidden', 'true');
        limpiar();
      }
    });

    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
      showLoggedIn(savedUser);
    }
  });
})();
