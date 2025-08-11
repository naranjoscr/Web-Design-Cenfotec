function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const isOpen = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', !isOpen);
}

// Cerrar menú si se hace click fuera
document.addEventListener('click', (e) => {
  const menu = document.getElementById('side-menu');
  const menuIcon = document.querySelector('.menu-icon');
  if(menu.classList.contains('open') && !menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
  }
});
