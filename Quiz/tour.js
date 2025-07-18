console.log("JS cargado correctamente");

const panorama = new PANOLENS.ImagePanorama("quiz.jpg");
const viewer = new PANOLENS.Viewer({ container: document.getElementById('container') });
viewer.add(panorama);

const radio = 5000;
const totalHotspots = 10;

const contenidos = [
  `<h1>Pedro</h1><p> Este es Pedro, Pedro ya no da más, Pedro está morido</p><img src="morision1.jpg" width="300"/>`,
  `<h1>Así quiere estar Pedro</h1><video src="reposar.mp4" controls width="100%"></video>`,
  `<h1>Así suena Pedro</h1><audio controls src="llanto.mp3" style="width:100%"></audio>`,
  `<h1>Pedro hizo una carta de navidad a Santa</h1><iframe src="santa.pdf" width="100%" height="300"></iframe>`,
  `<h1>Pedro tienes 2 opciones</h1><select><option>llorar</option><option>llorar con pizza</option></select>`,
  `<h1>Pedro recuerda cuando era feliz</h1><p>Un destello fugaz... como su hora de almuerzo.</p><img src="juegos.jpg" width="300"/>`,
  `<h1>Pedro consulta su horóscopo y piensa en ganarse la loteria</h1><p>"Hoy chambearas. Mañana... talvez no tengas que."</p><img src="loteria.jpg" width="300"/>`,
  `<h1>Pedro piensa en renunciar, huir y no mirar atras</h1><video src="escapar.mp4" controls width="100%"></video>`,
  `<h1>Pedro se acuerda que es pobre y no puede renunciar</h1><p>Pedro grita.</p><audio controls src="grito.mp3" style="width:100%"></audio>`,
  `<h1>Es la hora de salida de Pedro</h1><p>"Pedro grita..."</p><audio controls src="siu.mp3" style="width:100%"></audio>`
];

// Que la cámara empiece mirando hacia el hotspot 0 (a la derecha)
viewer.tweenControlCenter(new THREE.Vector3(radio, 0, 0), 0);

function abrirModal(contenidoHTML) {
  let viejoModal = document.getElementById('modal-overlay');
  if (viejoModal) viejoModal.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-overlay';

  const modal = document.createElement('div');
  modal.id = 'modal-content';
  modal.innerHTML = contenidoHTML;

  const btnCerrar = document.createElement('button');
  btnCerrar.id = 'modal-close-btn';
  btnCerrar.innerHTML = '&times;';
  btnCerrar.onclick = () => overlay.remove();

  modal.appendChild(btnCerrar);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

function crearHotspot(x, y, z, contenidoHTML) {
  const infospot = new PANOLENS.Infospot(300, "gatoshorando.jpg");

  infospot.position.set(x, y, z);

  infospot.addHoverElement(document.createElement("div"), 200);

  infospot.addEventListener('click', () => {
    abrirModal(contenidoHTML);
  });

  panorama.add(infospot);
}

// Ángulo base para que el primero salga a la derecha
const angleOffset = Math.PI / 2;

for(let i = 0; i < totalHotspots; i++) {
  const angle = (i / totalHotspots) * Math.PI * 2 + angleOffset;
  const x = radio * Math.cos(angle);
  const y = 0;
  const z = radio * Math.sin(angle);
  crearHotspot(x, y, z, contenidos[i]);
}
