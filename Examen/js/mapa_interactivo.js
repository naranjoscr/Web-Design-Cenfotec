document.addEventListener('DOMContentLoaded', () => {
  const puntos = document.querySelectorAll('.punto');
  const descripcion = document.getElementById('descripcion');
  const contenedorMapa = document.querySelector('.mapa-container');

  const textos = {
    1: "<strong>San José:</strong> Capital de Costa Rica, centro político, económico y cultural del país.",
    2: "<strong>Alajuela:</strong> Provincia cálida, famosa por el Volcán Poás y su producción agrícola.",
    3: "<strong>Cartago:</strong> Antigua capital, destaca la Basílica de Los Ángeles y el Volcán Irazú.",
    4: "<strong>Heredia:</strong> Conocida como 'Ciudad de las Flores', con cafetales y universidades.",
    5: "<strong>Guanacaste:</strong> Provincia de hermosas playas, cultura sabanera y clima seco tropical.",
    6: "<strong>Limón:</strong> Provincia costera en el Caribe, famosa por sus playas y cultura afrocaribeña.",
    7: "<strong>Puntarenas:</strong> Provincia extensa con costa en el Pacífico, famosa por sus playas y pesca."
  };

  puntos.forEach(punto => {
    punto.addEventListener('click', () => {
      const id = punto.getAttribute('data-id');
      const texto = textos[id] || "Información no disponible.";
      descripcion.innerHTML = texto;
      descripcion.style.display = "block";

      // Posicionar descripción cerca del punto clickeado
      const rectPunto = punto.getBoundingClientRect();
      const rectContenedor = contenedorMapa.getBoundingClientRect();

      // Calcular posición relativa dentro del contenedor
      let top = rectPunto.top - rectContenedor.top + punto.offsetHeight + 8; // 8px abajo del punto
      let left = rectPunto.left - rectContenedor.left;

      // Ajustar para que no se salga del contenedor a la derecha
      const descripcionWidth = 250; // o mide el ancho real
      if (left + descripcionWidth > rectContenedor.width) {
        left = rectContenedor.width - descripcionWidth - 10; // 10px margen
      }

      descripcion.style.top = `${top}px`;
      descripcion.style.left = `${left}px`;

      descripcion.focus();
    });

    // Accesibilidad: activar con Enter o espacio
    punto.addEventListener('keypress', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        punto.click();
      }
    });
  });

  // Opcional: ocultar descripción si se hace click fuera de puntos y descripción
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('punto') && !descripcion.contains(e.target)) {
      descripcion.style.display = "none";
    }
  });
});
