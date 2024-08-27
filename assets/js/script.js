<<<<<<< HEAD
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
=======
//console.log('Archivo js funcionando...');
const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let fullName = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let msg = document.getElementById('message').value;
  //console.log('Los datos son: ' + fullName + email + msg);
  form.reset();

  let contentForm = document.querySelector('#contentForm');
  contentForm.classList.add('alert', 'alert-success');
  contentForm.innerHTML = `
          <hr>
        <br><strong>Mensaje enviado. Le responderemos a la brevedad posible.</strong>
        <br><strong>Nombre: </strong> ${fullName}
        <br><strong>Email: </strong> ${email}
        <br><strong>Mensaje: </strong> ${msg}
  `;
>>>>>>> 2ffb130014a3d8f079fa998474562bd65c16472f
});
