const buttonNorte = document.getElementById('buttonNorte');
const buttonCentro = document.getElementById('buttonCentro');
const buttonSur = document.getElementById('buttonSur');

const img = document.getElementById('image');

buttonNorte.addEventListener('click', () => {
  img.src = './assets/img/norte.jpg';
});

buttonCentro.addEventListener('click', () => {
  img.src = './assets/img/centro.jpg';
});

buttonSur.addEventListener('click', () => {
  img.src = './assets/img/sur.jpg';
});
