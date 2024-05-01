// tableau des slides
const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// ETAPE 2 | eventlisteners  - à supprimer éventuellement
let listArrows = document.querySelectorAll('.arrow');

for (let i=0; i<listArrows.length; i++) {
    listArrows[i].addEventListener( "click", (e) =>{
        console.log (`j'ai cliqué sur ${e.target.alt}`)
    })
}

// ETAPE 3 | Ajouter des BULLETS POINTS au SLIDER
const bulletsContainer = document.querySelector('.dots');

slides.forEach((_, index) => {
    const bullet = document.createElement("p");
    bullet.classList.add("dot");
    if (index === 0) bullet.classList.add("dot_selected");
    bullet.dataset.index = index;
    bulletsContainer.appendChild(bullet);   
});

// Récupérer les éléments de points de navigation
const listDots = document.querySelectorAll('.dot');

//ETAPE 4&5 | SLIDER
const imgSlide = document.querySelector('.banner-img');
const pSlide = document.querySelector('#banner p');
let index = 0;

function changeCurrent(sens) {
    index = (index + sens + slides.length) % slides.length;
    imgSlide.src = `./assets/images/slideshow/${slides[index].image}`;
    pSlide.innerHTML = `${slides[index].tagLine}`;
    const BulletSelected = document.querySelector('.dot_selected');
    BulletSelected.classList.remove("dot_selected");
    listDots[index].classList.add("dot_selected");
}
// eventlisteners ETAPE 2 redistribués sur classes spécifiques
document.querySelector('.arrow_left').addEventListener("click", () => changeCurrent(-1));
document.querySelector('.arrow_right').addEventListener("click", () => changeCurrent(1));
