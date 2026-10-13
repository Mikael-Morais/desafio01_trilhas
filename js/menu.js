const btnMenu = document.getElementsByClassName('btn-menu')[0];
const menu = document.getElementsByClassName('menu')[0];

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});