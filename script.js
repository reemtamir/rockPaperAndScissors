'use-strict';
const h2 = document.querySelector('.h2');
h2.classList.add('mt-5', 'text-center');

const imgs = {
  rock: `https://dictionary.cambridge.org/fr/images/thumb/rock_noun_004_2211.jpg?version=5.0.248`,

  paper: `https://target.scene7.com/is/image/Target/FillerPaper_QUIVER-200522-1590188565921`,

  scissors: `https://image.shutterstock.com/z/stock-photo-scissors-for-sewing-isolated-on-white-background-professional-scissors-for-the-seamstress-1324077986.jpg`,
};

const card = document.querySelector('.chose ');
card.classList.add('row', 'm-auto', 'text-center');
card.innerHTML += ` 
<div  class="col-4 img"><img src="${imgs.rock}" class="card-img-top col" alt="..."></div>
<div  class="col-4 img"><img src="${imgs.paper}" class="card-img-top col" alt="..."></div>
<div  class="col-4 img"><img src="${imgs.scissors}" class="card-img-top col" alt="..."></div>`;

const div = document.getElementById('main');
const pics = document.querySelectorAll('.img');
let userCount = 0;
let compCount = 0;
const userRes = document.querySelector('.user-count');
const compRes = document.querySelector('.comp-count');
const h1 = document.getElementById('h1');
h1.classList.add('text-center', 'mt-5', 'text-primary');

for (let key of pics) {
  key.addEventListener('click', render);
}

let compImg;
function render() {
  h2.style.color = getRandomColor();
  h1.classList.remove('text-danger');
  h1.innerHTML = `ROCK PAPER AND SCISSORS`;
  compImg = imgs[getRandomImg(imgs)];

  div.innerHTML = ` <div class="player-img col-6 my-5 ">
  <img
    src="${event.target.currentSrc}"
    alt=" pic"
  />
  </div>

  <div class="com-img col-6 my-5">
  <img
    src="${compImg}"
    alt=" pic"
  />
  </div>`;
  check();
}

function check() {
  h2.classList.add('d-none');
  setTimeout(() => {
    h2.classList.remove('d-none');
    userRes.innerHTML = ` You  ${userCount}`;
    compRes.innerHTML = ` Computer ${compCount}`;
  }, 3000);

  if (
    event.target.currentSrc === imgs['scissors'] &&
    compImg === imgs['scissors']
  ) {
    h2.innerHTML = 'even'.toUpperCase();
  } else if (
    event.target.currentSrc === imgs['scissors'] &&
    compImg === imgs['paper']
  ) {
    h2.innerHTML = 'scissors win'.toUpperCase();
    userCount++;
  } else if (
    event.target.currentSrc === imgs['scissors'] &&
    compImg === imgs['rock']
  ) {
    h2.innerHTML = 'rock win'.toUpperCase();
    compCount++;
  }

  if (event.target.currentSrc === imgs['paper'] && compImg === imgs['paper']) {
    h2.innerHTML = 'even'.toUpperCase();
  } else if (
    event.target.currentSrc === imgs['paper'] &&
    compImg === imgs['scissors']
  ) {
    h2.innerHTML = 'scissors win'.toUpperCase();
    compCount++;
  } else if (
    event.target.currentSrc === imgs['paper'] &&
    compImg === imgs['rock']
  ) {
    h2.innerHTML = 'paper win'.toUpperCase();
    userCount++;
  }

  if (event.target.currentSrc === imgs['rock'] && compImg === imgs['rock']) {
    h2.innerHTML = 'even'.toUpperCase();
  } else if (
    event.target.currentSrc === imgs['rock'] &&
    compImg === imgs['scissors']
  ) {
    h2.innerHTML = 'rock win'.toUpperCase();
    userCount++;
  } else if (
    event.target.currentSrc === imgs['rock'] &&
    compImg === imgs['paper']
  ) {
    h2.innerHTML = 'paper win'.toUpperCase();
    compCount++;
  }

  if (userCount === 5 || compCount === 5) {
    h1.innerHTML = userCount === 5 ? 'You win 😀' : 'Computer win 😁';
    h1.classList.add('text-danger');
    userCount = 0;
    compCount = 0;
  }
}

function getRandomImg(obj) {
  let arrOfKeys = [];

  for (let key in obj) {
    arrOfKeys.push(key);
  }
  const random = arrOfKeys[Math.floor(Math.random() * arrOfKeys.length)];
  return random;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
