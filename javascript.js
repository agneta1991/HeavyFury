let bands = [
  {
    image:'images/band1.jpg',
    name: 'Oblivion Reign',
    description:'With a crushing sonic assault, Oblivion Reign reigns supreme, channeling raw energy and unyielding brutality through their bone-shattering compositions.',
  },

  {
    image:'images/band2.jpg',
    name: 'Serpent\'s Embrace',
    description: 'Serpent\'s Embrace mesmerizes with their venomous melodies and haunting atmosphere, entwining listeners in a dark embrace of ethereal beauty and menacing power.',
  },
  {
    image:'images/band3.jpg',
    name: 'Thunderstrike',
    description: 'Thunderstrike commands the stage with electrifying energy, unleashing a storm of thunderous rhythms and soaring anthems that ignite the crowd in an explosive frenzy.',
  },
  {
    image:'images/band4.jpg',
    name: 'Shadowstorm',
    description: 'From the depths of darkness, Shadowstorm emerges, weaving intricate harmonies and atmospheric layers to create a haunting sonic landscape that enchants and captivates.',
  },
  {
    image:'images/band5.jpg',
    name: 'Crimson Dawn',
    description: 'A symphony of darkness and passion, Crimson Dawn paints vivid musical portraits with their fiery melodies and poetic lyricism, leaving an indelible mark on the soul.',
  },
  {
    image:'images/band6.jpg',
    name: 'Infernal Forge',
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
/*let seeMore = document.getElementById('see-more');

seeMore.addEventListener('touchstart', seeMoreFunction);

function seeMoreFunction(){
let headline = document.getElementById('dynamic-headliners');

let thirdHead = document.createElement('div');
thirdHead.className = 'thirdBand band';
thirdHead.innerHTML =
headline.appendChild('thirdHead');

let fourthHead = document.createElement('div');
fourthHead.className = 'fourthBand band';
fourthHead.innerHTML = 
headline.appendChild('fourthHead');

let fifthHead = document.createElement('div');
fifthHead.className = 'fifthBand band';
fifthHead.innerHTML = 
headline.appendChild('fifthHead');

let sixthHead = document.createElement('div');
sixthHead.className = 'sixthBand band';
sixthHead.innerHTML =
headline.appendChild('sixthHead');

}
*/