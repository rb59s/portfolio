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
const changeButtonnight = document.getElementsByClassName('night')[0];
const footer = document.querySelector('footer');
const nf = document.querySelector('.nf');
const p = document.querySelector('.p');
const c = document.querySelector('.change');
const changeButtonstar = document.querySelector('.star');
const bf = document.querySelectorAll('.diamond1');
const bf1 = document.querySelector('.diamond2');
const video = document.querySelector('.video1');
const d1 = document.getElementById('d1');
const l1 = document.querySelector('.diamond11');
const l2 = document.querySelector('.diamond12');
const l3 = document.querySelector('.diamond13');
const changeButtonsunset = document.querySelector('.sunset');



function changeBackgroundAndHeadernight() {

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
  d1.style.filter = "invert()"


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
  d1.style.filter = "";
  video.src = "./logo/img_remove/mylivewallpapers-com-Space-3440x1440 (1).mp4";

  // c.style.backgroundColor = filter: invert(); 
}



function changeBackgroundAndHeadersunset() {

  
  video.src = "./imgbg/mylivewallpapers.com-Sunset-Ocean.mp4";

  
  header.style.backgroundImage = "linear-gradient(to bottom, rgb(150, 6, 150), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  header.style.color = "#fff"; 
  
  footer.style.backgroundImage = "linear-gradient(to top, rgb(75, 2, 75), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  nf.style.color = "#C30F09";
  p.style.color = "#C30F09";
  textElement.style.color = "#cda9cb";
  c.style.filter = "";
  for (const bf2 of bf) {
    
    bf2.style.filter = "";
  }
  bf1.style.filter = "";
  d1.style.filter = ""


  
}





changeButtonnight.addEventListener('click', changeBackgroundAndHeadernight);
changeButtonstar.addEventListener('click', changeBackgroundAndHeaderstar);
changeButtonsunset.addEventListener('click', changeBackgroundAndHeadersunset);







const b1 = document.createElement('span');
b1.textContent = "r.b59_ls";
function bulle1() {
 l1.addEventListener("mouseover", () => {
    b1.style.visibility = "visible";
    b1.style.opacity = "1";
  });

  l1.addEventListener("mouseout", () => {
    b1.style.visibility = "hidden";
    b1.style.opacity = "0";
  });

  b1.classList.add("b100");
  l1.appendChild(b1);




}

const b2 = document.createElement('span');
b2.textContent = "07 83 81 84 62";
function bulle2() {
  l2.addEventListener("mouseover", () => {
     b2.style.visibility = "visible";
     b2.style.opacity = "1";
   });
 
   l2.addEventListener("mouseout", () => {
     b2.style.visibility = "hidden";
     b2.style.opacity = "0";
   });
 
   b2.classList.add("b200");
   l2.appendChild(b2);
 
 
 
 
 }


 const b3 = document.createElement('span');
b3.textContent = "berrazzag59dbz@gmail.com";
function bulle3() {
  l3.addEventListener("mouseover", () => {
     b3.style.visibility = "visible";
     b3.style.opacity = "1";
   });
 
   l3.addEventListener("mouseout", () => {
     b3.style.visibility = "hidden";
     b3.style.opacity = "0";
   });
 
   b3.classList.add("b300");
   l3.appendChild(b3);
 
 
 
 
 }

bulle1()
bulle2()
bulle3()

  





