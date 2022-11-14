document.addEventListener('DOMContentLoaded', function () {

  let burger = document.getElementById('burger');
  let burgerMenu = document.getElementById('burger-menu');

  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
  })
  
  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
  })

})
/* 
document.addEventListener('DOMContentLoaded', function () {



  

}) */


