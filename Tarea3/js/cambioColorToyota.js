const select = document.getElementById('colorSelect');
const carro = document.getElementById('carro');
const imagenesCarro = {
  rojo: 'imagenes/toyotarojo.png',
  blanco: 'imagenes/toyotablanco.png',
  negro: 'imagenes/toyotanegro.png',
  gris: 'imagenes/toyotagris.png',
};

select.addEventListener('change', () => {
  const color = select.value;
  carro.src = imagenesCarro[color] || imagenesCarro['rojo'];
  carro.alt = `Toyota color ${color}`;
});