// const p = document.getElementById('p');
const text = "Bonjour, je m'appelle Rayan Berrazzag, j'ai 20 ans et je suis un jeune développeur passionné par le web. Je suis une personne perfectionniste, toujours à la recherche de nouveaux outils et compétences pour m'améliorer. Mon objectif est de repousser mes limites pour fournir des solutions de qualité, adaptées aux besoins des projets sur lesquels je travaille.";
const textElement = document.getElementById('typed-text');
const typingSpeed = 50; // Vitesse d'écriture en ms

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeText);