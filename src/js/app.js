import '../sass/styles.scss';
import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#title',  {
  delay: 75,
})

typewriter.typeString('Hello world, I\'m Jef Vermeire').start();

/* const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  if(menu.className === 'navbar-menu') {
    menu.classList += ' is-active';
    hamburger.classList += ' is-active';
  } else {
    hamburger.classList = 'navbar-burger burger';
    menu.classList = 'navbar-menu';
  }
}) */

window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}