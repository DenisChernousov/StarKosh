const MENU_OPEN_CLASS = 'burger-menu__open';
const CONTROL_OPEN_CLASS = 'burger-menu__control__open';
const burgerNode = document.querySelector('.burger-menu');
const burgerControlNode = document.querySelector('.burger-menu__control');

burgerControlNode.addEventListener('click', (_event)=>{
burgerNode.classList.toggle(MENU_OPEN_CLASS);
  burgerControlNode.classList.toggle(CONTROL_OPEN_CLASS);
});