import './style.scss';
import { greenColor,blueColor,redColor, whiteColor,yellowColor} from './TS/colorSort';
import {smallSize,mediumSize,bigSize} from './TS/sizeSort';
import {mainPage,settingPage} from './TS/navigation';
// import {createSnow,updateSnow} from './TS/snow';
import {allIn} from './TS/sortByButton';
import {sortFavourite} from './TS/sortByFAv';
import {sortAll} from './TS/categoryAll';
import {playSong} from './TS/music';
import {myArray,addtoLS} from './TS/LS';
import { bigSlot, render,removeCard } from './TS/render';

const myAudio = document.querySelector(".audio");
const CategoryAll = document.getElementById("categoryAll") as HTMLInputElement;
const favourite = document.getElementById("favourite") as HTMLInputElement;

const small = document.getElementById("small") as HTMLInputElement;
small.addEventListener("click",smallSize);
const medium = document.getElementById("medium") as HTMLInputElement;
medium.addEventListener("click",mediumSize);
const big = document.getElementById("big") as HTMLInputElement;
big.addEventListener("click",bigSize);

const whiteB = document.getElementById("white") as HTMLInputElement;
const yellowB = document.getElementById("yellow") as HTMLInputElement;
const redB = document.getElementById("red") as HTMLInputElement;
const blueB = document.getElementById("blue") as HTMLInputElement;
const greenB = document.getElementById("green") as HTMLInputElement;



// const addSS = document.querySelectorAll<HTMLElement>(".card").forEach(box => 
//     box.addEventListener("click", whiteColor));


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

CategoryAll.addEventListener("change",sortAll);
favourite.addEventListener("change",sortFavourite); //display favourite only
all4?.addEventListener("click", allIn);





myAudio?.addEventListener("click",playSong); //music

// removeCard("белый")
render();

settingPage();
mainPage();


const addLS = document.querySelectorAll<HTMLElement>(".card").forEach(box => 
box.addEventListener("click", addtoLS));












































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

