import './style.scss';
import { greenColor,blueColor,redColor, whiteColor,yellowColor} from './TS/colorSort';
import {smallSize,mediumSize,bigSize} from './TS/sizeSort';
import {mainPage,settingPage} from './TS/navigation';
import {playSong} from './TS/music';
import {bellShape,ballShape,pineShape,snowFlakeShape,birdShape} from './TS/shapeSort';
import {myArray,addtoLS} from './TS/LS';
import {allIn} from './TS/sortByButton';
import {sortFavourite} from './TS/sortByFAv';
// import {createSnow,updateSnow} from './TS/snow';

// import {sortAll} from './TS/categoryAll';

import { bigSlot, render,removeCard } from './TS/render';

const myAudio = document.querySelector(".audio");
// const CategoryAll = document.getElementById("categoryAll") as HTMLInputElement;
const favourite = document.getElementById("favourite") as HTMLInputElement;


const small = document.getElementById("small") as HTMLInputElement;
const medium = document.getElementById("medium") as HTMLInputElement;
const big = document.getElementById("big") as HTMLInputElement;
small.addEventListener("click",smallSize);
big.addEventListener("click",bigSize);
medium.addEventListener("click",mediumSize);

const whiteB = document.getElementById("white") as HTMLInputElement;
const yellowB = document.getElementById("yellow") as HTMLInputElement;
const redB = document.getElementById("red") as HTMLInputElement;
const blueB = document.getElementById("blue") as HTMLInputElement;
const greenB = document.getElementById("green") as HTMLInputElement;
whiteB.addEventListener("click",whiteColor);
yellowB.addEventListener("click",yellowColor);
redB.addEventListener("click",redColor);
blueB.addEventListener("click",blueColor);
greenB.addEventListener("click",greenColor);




const all4 = document.querySelector(".dropdown-content");
// const fromAB = document.getElementById("fromAB")as HTMLInputElement;
// const fromBA = document.getElementById("fromBA")as HTMLInputElement;
// const from10 = document.getElementById("from10")as HTMLInputElement;
// const from01 = document.getElementById("from01")as HTMLInputElement;
// fromAB.addEventListener("click",allIn); // display fromAtoB 
// fromBA.addEventListener("click",allIn); // display fromAtoB 
// from10.addEventListener("click",allIn); // display fromAtoB 
// from01.addEventListener("click",allIn); // display fromAtoB 

// CategoryAll.addEventListener("change",sortAll);
favourite.addEventListener("change",sortFavourite); //display favourite only
all4?.addEventListener("click", allIn); //dropdow Sort
myAudio?.addEventListener("click",playSong); //music

// render(); //only LS work

settingPage();
mainPage();


const addLS = document.querySelectorAll<HTMLElement>(".card").forEach(box => 
box.addEventListener("click", addtoLS));








const bell = document.getElementById("bell") as HTMLInputElement;
const ball = document.getElementById("ball") as HTMLInputElement;
const pine = document.getElementById("pine") as HTMLInputElement;
const snowFlake1 = document.getElementById("snowFlake1") as HTMLInputElement;
const bird = document.getElementById("bird") as HTMLInputElement;

bell?.addEventListener("click",bellShape);
ball?.addEventListener("click",ballShape);
pine?.addEventListener("click",pineShape);
snowFlake1?.addEventListener("click",snowFlakeShape);
bird?.addEventListener("click",birdShape);







































// const snowFlake = document.getElementById("snowFlake")as HTMLInputElement;
// const canvas = document.getElementById("canvas")as HTMLInputElement;

// function snowOnn(){
//     if (snowFlake.checked){
//         bigSlot.appendChild(canvas);
//          setInterval(updateSnow,50);
//           setTimeout(createSnow,10)
         
//         } else {
//             bigSlot.removeChild(canvas);
//         }    
// }
// snowFlake.addEventListener("click", snowOnn);

