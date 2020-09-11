import '../sass/styles.scss';
import Typewriter from 'typewriter-effect/dist/core';

const typewriter = new Typewriter('#title',  {
  delay: 75,
})

typewriter.typeString('Hello world, I\'m Jef Vermeire').start().callFunction(() => {
  document.getElementById('navbar').classList = 'navbar-menu';
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('navbar');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightbox = document.getElementById('lightbox');
const projectImgs = document.getElementsByClassName('projectImg');

hamburger.addEventListener('click', () => {
  if(menu.className === 'navbar-menu') {
    menu.classList += ' is-active';
    hamburger.classList += ' is-active';
  } else {
    hamburger.classList = 'navbar-burger burger';
    menu.classList = 'navbar-menu';
  }
})

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const openLightBox = (img) => {
  lightbox.style.display = 'block';
  lightboxImg.src = img;
}

Array.from(projectImgs).forEach((img) => {
  img.addEventListener('click', (ev) => {
    openLightBox(ev.target.src);
  })
})

window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}