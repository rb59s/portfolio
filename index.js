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
  //   const back = document. // Changed from ducument to document
  //   document.addEventListener("click", (bulle) => {
  
  
  
  
  
  //   })}


const body = document.body;
const changeButtonnight = document.getElementsByClassName('night')[0];
const footer = document.querySelector('footer');
const nf = document.querySelector('.nf');
const p = document.querySelector('.p');
const c = document.querySelector('.change');
const cc = document.querySelectorAll('.cc');
const changeButtonstar = document.querySelector('.star');
const bf = document.querySelectorAll('.diamond1');
const bf1 = document.querySelector('.diamond2');
const video = document.querySelector('.video1');
const d1 = document.getElementById('d1');
const l1 = document.querySelector('.diamond11');
const l2 = document.querySelector('.diamond12');
const l3 = document.querySelector('.diamond13');
const changeButtonsunset = document.querySelector('.sunset');
const pg = document.querySelectorAll('.pentagone-gauche');
const pd = document.querySelectorAll('.pentagone-droit');
const pgbis = document.querySelectorAll('.pentagone-gauche-bis');
const pdbis = document.querySelectorAll('.pentagone-droit-bis');
const point = document.querySelectorAll('.point');
const btncv = document.querySelectorAll('.btncv');
const btncvp = document.querySelectorAll('.btncv p');




function changeBackgroundAndHeadernight() {

  // body.style.backgroundImage = "url('./imgbg/fond-gif.gif')";
  video.src = "./imgbg/fond-gif.mp4";

  
  header.style.backgroundImage = "linear-gradient(to bottom, rgb(150, 6, 150), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  header.style.color = "#fff"; 
  
  footer.style.backgroundImage = "linear-gradient(to top, rgb(75, 2, 75), rgba(128, 0, 128, 0.5), rgba(128, 0, 128, 0))";
  nf.style.color = "rgb(75, 2, 75)";
  p.style.color = "rgb(75, 2, 75)";
  textElement.style.color = "#cda9cb";
  // c.style.filter = "invert()";
  c.style.backgroundColor = "rgb(150, 6, 150)";
  for (const cc2 of cc){
    cc2.style.filter = "invert()";

  }
  for (const pg2 of pg){
    pg2.style.backgroundColor = "rgb(150, 6, 150)";
  }
  for (const pd2 of pd){
    pd2.style.backgroundColor = "rgb(150, 6, 150)";
  }
  for (const pgbis2 of pgbis){
    pgbis2.style.backgroundColor = "rgb(150, 6, 150)";
  }
  for (const pdbis2 of pdbis){
    pdbis2.style.backgroundColor = "rgb(150, 6, 150)";
  }
  for (const point2 of point){
    point2.style.backgroundColor = "rgb(150, 6, 150)";

  }
  for(const btncv2 of btncv){
    btncv2.style.backgroundColor = "rgb(150, 6, 150)";
    btncv2.style.opacity = "0.7"
  }
  for(const btncvp2 of btncvp){
    btncvp2.style.color = "whitesmoke"
  }
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
  c.style.backgroundColor = "";
  for (const cc2 of cc){
    cc2.style.filter = "";

  }
  for (const pg2 of pg){
    pg2.style.backgroundColor = "";
  }
  for (const pd2 of pd){
    pd2.style.backgroundColor = "";
  }
  for (const pgbis2 of pgbis){
    pgbis2.style.backgroundColor = "";
  }
  for (const pdbis2 of pdbis){
    pdbis2.style.backgroundColor = "";
  }
  for (const point2 of point){
    point2.style.backgroundColor = "";

  }
  for(const btncv2 of btncv){
    btncv2.style.backgroundColor = ""
  }
  for(const btncvp2 of btncvp){
    btncvp2.style.color = ""
  }
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

  
  header.style.backgroundImage = "linear-gradient(to bottom,rgb(180, 140, 0), rgba(180, 140, 0, 0.7), rgba(180, 140, 0, 0))";
  header.style.color = "#fff"; 
  
  footer.style.backgroundImage = "linear-gradient(to top, rgb(180, 140, 0), rgba(180, 140, 0, 0.7), rgba(180, 140, 0, 0))";
  nf.style.color = "rgba(180, 140, 0, 0.7)";
  p.style.color = "rgba(180, 140, 0, 0.7)";
  textElement.style.color = "rgba(243, 242, 239, 0.7)";
  c.style.backgroundColor = "rgb(236, 195, 31)";
  for (const cc2 of cc){
    cc2.style.filter = "";

  }
  for (const pg2 of pg){
    pg2.style.backgroundColor = "rgba(180, 140, 0, 0.7)";
  }
  for (const pd2 of pd){
    pd2.style.backgroundColor = "rgba(180, 140, 0, 0.7)";
  }
  for (const pgbis2 of pgbis){
    pgbis2.style.backgroundColor = "rgba(180, 140, 0, 0.7)";
  }
  for (const pdbis2 of pdbis){
    pdbis2.style.backgroundColor = "rgba(180, 140, 0, 0.7)";
  }
  for (const point2 of point){
    point2.style.backgroundColor = "rgba(180, 140, 0, 0.7)";

  }
  for(const btncv2 of btncv){
    btncv2.style.backgroundColor = "rgba(180, 140, 0, 0.7)"
  }
  for(const btncvp2 of btncvp){
    btncvp2.style.color = "whitesmoke"
  }
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


// document.getElementById('showPdf').addEventListener('click', () => {
//   const pdfViewer = document.getElementById('pdfViewer');
//   pdfViewer.src = 'document.pdf'; 
//   pdfViewer.style.display = 'block';
// });






