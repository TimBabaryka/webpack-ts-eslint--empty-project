import './style.scss';
import {mainPage,settingPage} from './TS/navigation';

import {createSnow,updateSnow} from './TS/snow';
// import {fromABF,fromBAF,from10F,from01F} from './TS/sortByButton';
import {allIn} from './TS/sortByButton';

import {sortFavourite} from './TS/sortByFAv';
import {sortAll} from './TS/categoryAll';
import {playSong} from './TS/music';
import { bigSlot } from './TS/render';

const myAudio = document.querySelector(".audio");

const CategoryAll = document.getElementById("categoryAll") as HTMLInputElement;
const favourite = document.getElementById("favourite") as HTMLInputElement;



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



const snowFlake = document.getElementById("snowFlake")as HTMLInputElement;
const canvas = document.getElementById("canvas")as HTMLInputElement;

function snowOnn(){
   
    if (snowFlake.checked){
        bigSlot.appendChild(canvas);
         setInterval(updateSnow,50);
          setTimeout(createSnow,10)
         
        } else {
            bigSlot.removeChild(canvas);
            //   clearTimeout(createSnow);
            //   clearInterval(updateSnow);
            //   snowUpd=clearInterval(updateSnow);
        //     clearTimeout(snows);
        //  clearInterval(snowUpd);
        }
        
}
snowFlake.addEventListener("click", snowOnn);




myAudio?.addEventListener("click",playSong); //music

settingPage();
mainPage();





