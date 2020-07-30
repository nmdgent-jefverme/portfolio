import '../sass/styles.scss';

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

window.onload = function () {
  document.getElementById("title").innerHTML = '';
  typeWriter()
};

var i = 0;
var txt = 'Hello world, I\'m Jef Vermeire';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}