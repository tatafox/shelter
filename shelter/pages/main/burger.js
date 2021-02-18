const header = document.querySelector('.header__wrapper'),
      menu = document.querySelector('.menu'),
      logo = document.querySelector('.logo'),
      burger = document.querySelector('.header__burger'),
      overlay = document.querySelector('.header__burger-overlay');

const burgerClick = () => {
  menu.classList.toggle('menu__burger_display');
  logo.classList.toggle('logo-burger_visible');
  burger.classList.toggle('header__burger_rotate');
  overlay.classList.toggle('header__burger-overlay_visible');
  document.body.classList.toggle('body_lock');
}

document.querySelector('.header__burger').addEventListener('click', burgerClick);
document.querySelector('.header__burger-overlay').addEventListener('click', burgerClick);