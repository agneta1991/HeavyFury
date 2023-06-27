let bands = [
  {
    image: 'images/band1.jpg',
    name: 'Oblivion Reign',
    whereFrom: 'Sweden',
    description: 'With a crushing sonic assault, Oblivion Reign reigns supreme, channeling raw energy and unyielding brutality through their bone-shattering compositions.',
  },

  {
    image: 'images/band2.jpg',
    name: 'Serpent\'s Embrace',
    whereFrom: 'Sweden',
    description: 'Serpent\'s Embrace mesmerizes with their venomous melodies and haunting atmosphere, entwining listeners in a dark embrace of ethereal beauty and menacing power.',
  },
  {
    image: 'images/band3.jpg',
    name: 'Thunderstrike',
    whereFrom: 'Latvia',
    description: 'Thunderstrike commands the stage with electrifying energy, unleashing a storm of thunderous rhythms and soaring anthems that ignite the crowd in an explosive frenzy.',
  },
  {
    image: 'images/band4.jpg',
    name: 'Shadowstorm',
    whereFrom: 'Lithuania',
    description: 'From the depths of darkness, Shadowstorm emerges, weaving intricate harmonies and atmospheric layers to create a haunting sonic landscape that enchants and captivates.',
  },
  {
    image: 'images/band5.jpg',
    name: 'Crimson Dawn',
    whereFrom: 'Estonia',
    description: 'A symphony of darkness and passion, Crimson Dawn paints vivid musical portraits with their fiery melodies and poetic lyricism, leaving an indelible mark on the soul.',
  },
  {
    image: 'images/band0.jpg',
    name: 'Infernal Forge',
    whereFrom: 'Finland',
    description: 'Masters of relentless aggression, Infernal Forge forge their sound in the fires of hell, delivering a relentless onslaught of blistering riffs and demonic vocals.',
  }
];


let burger = document.getElementById('burger');
burger.addEventListener('touchstart', openMenu);
let burgerMenu = document.getElementById('burger-menu-page');
let closeIcon = document.getElementById('fa-close');
closeIcon.addEventListener('touchstart', exitFunction);

function openMenu() {
  burgerMenu.style.display = 'block';
}

function exitFunction(event) {
  event.preventDefault();
  burgerMenu.style.display = 'none';
}

for (let i = 0; i <= bands.length - 1; i += 1) {
  let mainDiv = document.getElementById('dynamic-headliners');
  let div = document.createElement('div');
  div.className = 'dynamic-bands';
  div.id = 'band' + i;
  mainDiv.appendChild(div);

  let pic = document.createElement('img');
  pic.className = 'dynamic-pic';
  pic.src = bands[i].image;
  div.appendChild(pic);

  let divTwo = document.createElement('div');
  divTwo.className = 'dynamic-about';
  div.appendChild(divTwo);

  let h3 = document.createElement('h3');
  h3.className = 'dynamic-about-h3';
  h3.innerHTML = bands[i].name;
  divTwo.appendChild(h3);

  let h4 = document.createElement('h4');
  h4.className = 'dynamic-about-h4';
  h4.innerHTML = bands[i].whereFrom;
  divTwo.appendChild(h4);

  let p = document.createElement('p');
  p.className = 'dynamic-about-p';
  p.innerHTML = bands[i].description;
  divTwo.appendChild(p);
}

let seeMore = document.getElementById('see-more');
seeMore.addEventListener('touchstart', showFunction);

function showFunction() {
  document.getElementById('band2').style.display = 'flex';
  document.getElementById('band3').style.display = 'flex';
  document.getElementById('band4').style.display = 'flex';
  document.getElementById('band5').style.display = 'flex';

  seeMore.innerHTML = '<h3>See less</h3>' + '<i class="fas fa-chevron-up"></i>' ;
}