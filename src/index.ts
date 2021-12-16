import './style.scss';
import {mainPage,settingPage} from './TS/navigation';

import {createSnow,updateSnow} from './TS/snow';
// import {fromABF,fromBAF,from10F,from01F} from './TS/sortByButton';
import {allIn} from './TS/sortByButton';

import {sortFavourite} from './TS/sortByFAv';
import {sortAll} from './TS/categoryAll';
import {playSong} from './TS/music';

const myAudio = document.querySelector(".audio");

const CategoryAll = document.getElementById("categoryAll") as HTMLInputElement;
const favourite = document.getElementById("favourite") as HTMLInputElement;



const all = document.querySelector(".dropdown-content");
const fromAB = document.getElementById("fromAB")as HTMLInputElement;
const fromBA = document.getElementById("fromBA")as HTMLInputElement;
const from10 = document.getElementById("from10")as HTMLInputElement;
const from01 = document.getElementById("from01")as HTMLInputElement;

CategoryAll.addEventListener("change",sortAll);

favourite.addEventListener("change",sortFavourite); //display favourite only


all?.addEventListener("click", allIn);

// fromAB.addEventListener("click",allIn); // display fromAtoB 
// fromBA.addEventListener("click",allIn); // display fromAtoB 
// from10.addEventListener("click",allIn); // display fromAtoB 
// from01.addEventListener("click",allIn); // display fromAtoB 


myAudio?.addEventListener("click",playSong); //music

settingPage();
mainPage();



setInterval(updateSnow,50);
createSnow();


