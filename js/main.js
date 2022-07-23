const imgs = [
  "../images/dawid-zawila--G3rw6Y02D0-unsplash.jpg",

  "../images/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg",
  "../images/sami-takarautio-UZOpP-YHe9Q-unsplash.jpg",
];

const main = document.querySelector("main");
const imgElement = document.querySelectorAll("img");
let current = 0;

function reset() {
  for (let i = 0; i < imgElement.length; i++) {
    imgElement[i].style.transform = `scale(1)`;
    imgElement[i].style.border = `none`;
  }
}

function next() {
  reset();
  imgElement[current].style.transform = `scale(1.1)`;
  imgElement[current].style.border = `1px solid white`;

  main.style.background = `url("${imgs[current]}") center center/cover`;
  // console.log(current);
  if (current >= 2) {
    current = -1;
  }
  current++;
}
function startSlide() {
  reset();
  const time = setInterval(() => {
    next();
  }, 10000);
  imgElement[0].style.transform = `scale(1.1)`;
}
startSlide();
