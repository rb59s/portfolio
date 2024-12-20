const text = "Bonjour, je m'appelle Rayan Berrazzag, j'ai 20 ans et je suis un jeune développeur passionné par le web. Je suis une personne perfectionniste, toujours à la recherche de nouveaux outils et compétences pour m'améliorer.";
const textElement = document.getElementById('typed-text');
const typingSpeed = 40; 

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);




const header = document.querySelector("header");
  let lastScrollPosition = 0;

  document.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
      // Si on scrolle vers le haut, afficher le header
      header.classList.add("show");
    } else {
      // Si on scrolle vers le bas, cacher le header
      header.classList.remove("show");
    }

    lastScrollPosition = currentScrollPosition;
  });

  document.addEventListener("mousemove", (event) => {
    if (event.clientY < 50) {
      // Si la souris est proche du haut de la page, afficher le header
      header.classList.add("show");
    }
  });


  // function change (){
  //   const bulle = document.getElementsByClassName(change);
  //   const back = ducument.
  //   document.addEventListener("click", (bulle) => {
  
  
  
  
  
  //   })}


const body = document.body;
const changeButtonsunset = document.getElementsByClassName('sunset')[0];
const footer = document.querySelector('footer');
const nf = document.querySelector('.nf');
const p = document.querySelector('.p');
const c = document.querySelector('.change');
const changeButtonstar = document.querySelector('.star');
const bf = document.querySelectorAll('.diamond1');
const bf1 = document.querySelector('.diamond2');
const video = document.querySelector('.video1')


function changeBackgroundAndHeadersunset() {

  // body.style.backgroundImage = "url('./imgbg/fond-gif.gif')";
  video.src = "./imgbg/fond-gif.mp4";

  
  header.style.backgroundImage = "linear-gradient(to bottom, rgb(150, 6, 150), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  header.style.color = "#fff"; 
  
  footer.style.backgroundImage = "linear-gradient(to top, rgb(75, 2, 75), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  nf.style.color = "#C30F09";
  p.style.color = "#C30F09";
  textElement.style.color = "#cda9cb";
  c.style.filter = "invert()";
  for (const bf2 of bf) {
    
    bf2.style.filter = "invert()";
  }
  bf1.style.filter = "invert()";


  // c.style.backgroundColor = filter: invert(); 
}
function changeBackgroundAndHeaderstar() {

  body.style.backgroundImage = "";

  
  header.style.backgroundImage = "";
  header.style.color = ""; 
  
  footer.style.backgroundImage = "";
  nf.style.color = "";
  p.style.color = "";
  textElement.style.color = "";
  c.style.filter = "";
  for (const bf2 of bf) {
    
    bf2.style.filter = "";
  }
  bf1.style.filter = "";

  // c.style.backgroundColor = filter: invert(); 
}

changeButtonsunset.addEventListener('click', changeBackgroundAndHeadersunset);
changeButtonstar.addEventListener('click', changeBackgroundAndHeaderstar)







