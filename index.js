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


function changeBackgroundAndHeader() {

  body.style.backgroundImage = "url('./mylivewallpapers-com-Long-Night-Drive-4K-_1_.gif')";

  
  header.style.backgroundImage = "linear-gradient(to bottom, rgba(128, 0, 128, 1), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  header.style.color = "#fff"; 
  
  footer.style.backgroundImage = "linear-gradient(to top, rgba(128, 0, 128, 1), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  nf.style.color = "#c300ba";
  p.style.color = "#c300ba";
  textElement.style.color = "#cda9cb";
}

changeButtonsunset.addEventListener('click', changeBackgroundAndHeader);








