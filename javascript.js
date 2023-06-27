let burger = document.getElementById('burger');
burger.addEventListener ('touchstart', openMenu);
let burgerMenu = document.getElementById ('burger-menu-page');
let closeIcon = document.getElementById('fa-close');
closeIcon.addEventListener('touchstart', exitFunction);

function openMenu(){
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