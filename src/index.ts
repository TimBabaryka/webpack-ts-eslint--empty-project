import './style.scss';
import {
  greenColor, blueColor, redColor, whiteColor, yellowColor,
} from './TS/colorSort';
import { smallSize, mediumSize, bigSize } from './TS/sizeSort';
import {
  mainPage, settingPage, toTree, toToysfromTree, toMainfromTree,

} from './TS/navigation';
import { playSong } from './TS/music';
import {
  bellShape, ballShape, pineShape, snowFlakeShape, birdShape,
} from './TS/shapeSort';
import { addtoLS, addtoLocalSaved } from './TS/LS';
import { sort4Buttons } from './TS/sortByButton';
import { sortFavourite } from './TS/sortByFAv';
import { selectGarland } from './TS/garland';
import { updateCountdown } from './TS/countdown';
import { createSnow, updateSnow } from './TS/snow';

// import { getItems,renderLSToys} from './TS/getImage';

import { render } from './TS/render';

const myAudio = document.querySelector('.audio');

const favourite = document.getElementById('favourite') as HTMLInputElement;
const small = document.getElementById('small') as HTMLInputElement;
const medium = document.getElementById('medium') as HTMLInputElement;
const big = document.getElementById('big') as HTMLInputElement;
small.addEventListener('click', smallSize);
big.addEventListener('click', bigSize);
medium.addEventListener('click', mediumSize);

const whiteB = document.getElementById('white') as HTMLInputElement;
const yellowB = document.getElementById('yellow') as HTMLInputElement;
const redB = document.getElementById('red') as HTMLInputElement;
const blueB = document.getElementById('blue') as HTMLInputElement;
const greenB = document.getElementById('green') as HTMLInputElement;
whiteB.addEventListener('click', whiteColor);
yellowB.addEventListener('click', yellowColor);
redB.addEventListener('click', redColor);
blueB.addEventListener('click', blueColor);
greenB.addEventListener('click', greenColor);

const all4 = document.querySelector('.dropdown-content');
favourite.addEventListener('change', sortFavourite); // display favourite only
all4?.addEventListener('click', sort4Buttons); // dropdow Sort
myAudio?.addEventListener('click', playSong); // music

render();
sort4Buttons();
settingPage();
mainPage();
toToysfromTree();
toMainfromTree();

const addLS = document.querySelectorAll<HTMLElement>('.bigSlot').forEach((box) => box.addEventListener('click', addtoLS));
const buttonSave = document.querySelector('.savetoLS');
buttonSave?.addEventListener('click', addtoLocalSaved);

const bell = document.getElementById('bell') as HTMLInputElement;
const ball = document.getElementById('ball') as HTMLInputElement;
const pine = document.getElementById('pine') as HTMLInputElement;
const snowFlake1 = document.getElementById('snowFlake1') as HTMLInputElement;
const bird = document.getElementById('bird') as HTMLInputElement;

bell?.addEventListener('click', bellShape);
ball?.addEventListener('click', ballShape);
pine?.addEventListener('click', pineShape);
snowFlake1?.addEventListener('click', snowFlakeShape);
bird?.addEventListener('click', birdShape);

const snowFflakes = document.getElementById('snowFlake') as HTMLInputElement;
const canvas = document.getElementById('canvas') as HTMLInputElement;
const setting = document.querySelector('.settings') as HTMLInputElement;

const tree = document.querySelector('.tree') as HTMLInputElement;
const center = document.querySelector('.center') as HTMLInputElement;
const selectedCH = document.querySelector('.selectedCH') as HTMLInputElement;

function snowOnn() {
  if (snowFflakes.checked) {
    selectedCH.appendChild(canvas);
    setInterval(updateSnow, 50);
    setTimeout(createSnow, 10);
  } else {
    selectedCH.removeChild(canvas);
  }
}
snowFflakes.addEventListener('click', snowOnn);

const dressTreePage = document.querySelector('.dressTreePage');

dressTreePage?.addEventListener('click', toTree);

const tree1 = document.querySelector('.tree1') as HTMLInputElement;
const tree2 = document.querySelector('.tree2') as HTMLInputElement;
const tree3 = document.querySelector('.tree3') as HTMLInputElement;
const tree4 = document.querySelector('.tree4') as HTMLInputElement;
const tree5 = document.querySelector('.tree5') as HTMLInputElement;
const tree6 = document.querySelector('.tree6') as HTMLInputElement;

const treeNew = document.querySelector('.treeNew') as HTMLInputElement;
document.querySelector('.selectTree')?.addEventListener('click', (e) => {
  if (e.target === tree1) {
    treeNew.src = 'tree/1.png';

    // selectedCH.style.backgroundImage = "url(./tree/1.png)";
  } else if (e.target === tree2) {
    treeNew.src = 'tree/2.png';
    // selectedCH.style.backgroundImage = "url(./tree/2.png)";
  } else if (e.target === tree3) {
    treeNew.src = 'tree/3.png';
    // selectedCH.style.backgroundImage = "url(./tree/3.png)";
  } else if (e.target === tree4) {
    treeNew.src = 'tree/4.png';
    // selectedCH.style.backgroundImage = "url(./tree/4.png)";
  } else if (e.target === tree5) {
    treeNew.src = 'tree/5.png';
    // selectedCH.style.backgroundImage = "url(./tree/5.png)";
  } else if (e.target === tree6) {
    treeNew.src = 'tree/6.png';
    // selectedCH.style.backgroundImage = "url(./tree/6.png)";
  }
});

const background = document.querySelectorAll('.background');
const boxBG = document.querySelectorAll('.boxBG');

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
const bg4 = document.querySelector('.bg4');
const bg5 = document.querySelector('.bg5');
const bg6 = document.querySelector('.bg6');
const bg7 = document.querySelector('.bg7');
const bg8 = document.querySelector('.bg8');
const bg9 = document.querySelector('.bg9');
const bg10 = document.querySelector('.bg10');

const boxbg = document.querySelector('.boxBG');

document.querySelector('.background')?.addEventListener('click', (e) => {
  if (e.target === bg1) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/1.jpg)';
  } else if (e.target === bg2) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/2.jpg)';
  } else if (e.target === bg3) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/3.jpg)';
  } else if (e.target === bg4) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/4.jpg)';
  } else if (e.target === bg5) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/5.jpg)';
  } else if (e.target === bg6) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/6.jpg)';
  } else if (e.target === bg7) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/7.jpg)';
  } else if (e.target === bg8) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/8.jpg)';
  } else if (e.target === bg9) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/9.jpg)';
  } else if (e.target === bg10) {
    center.style.backgroundImage = '';
    center.style.backgroundImage = 'url(./bg/10.jpg)';
  }
});

const yellowSelect = document.getElementById('yellowSelect') as HTMLInputElement;
const redSelect = document.getElementById('redSelect') as HTMLInputElement;
const blueSelect = document.getElementById('blueSelect') as HTMLInputElement;
const greenSelect = document.getElementById('greenSelect') as HTMLInputElement;
const allSelect = document.getElementById('allSelect') as HTMLInputElement;
const offLights = document.getElementById('offLights') as HTMLInputElement;

yellowSelect.addEventListener('click', selectGarland);
redSelect.addEventListener('click', selectGarland);
blueSelect.addEventListener('click', selectGarland);
greenSelect.addEventListener('click', selectGarland);
allSelect.addEventListener('click', selectGarland);

setInterval(updateCountdown, 1000);
