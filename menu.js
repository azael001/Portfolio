const iconoBurger = document.getElementById('icono');
const menu = document.getElementById('menu');

iconoBurger.addEventListener('click', () => {
  menu.classList.toggle('activa');
});
