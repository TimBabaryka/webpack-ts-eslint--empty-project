import './style.scss';
import { greenColor,blueColor,redColor, whiteColor,yellowColor} from './TS/colorSort';
import {smallSize,mediumSize,bigSize} from './TS/sizeSort';
import {mainPage,settingPage} from './TS/navigation';
import {playSong} from './TS/music';
import {bellShape,ballShape,pineShape,snowFlakeShape,birdShape} from './TS/shapeSort';
import {myArray,addtoLS,addtoLocalSaved} from './TS/LS';
import {allIn} from './TS/sortByButton';
import {sortFavourite} from './TS/sortByFAv';
// import {createSnow,updateSnow} from './TS/snow';

// import {sortAll} from './TS/categoryAll';

import { bigSlot, render,removeCard,contentTemp } from './TS/render';
import data from './TS/data';

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


const addLS = document.querySelectorAll<HTMLElement>(".bigSlot").forEach(box => 
box.addEventListener("click", addtoLS));



const buttonSave = document.querySelector(".savetoLS");
buttonSave?.addEventListener("click", addtoLocalSaved)




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







const searchBar = document.querySelector(".search-input");
searchBar?.addEventListener("keyup", (e)=>{
    const searchString = e.target.value.toLowerCase();

    const filterToys = data.filter((element) => {
        return (
            element.name.toLowerCase().includes(searchString) ||
            element.num.toLowerCase().includes(searchString)||
            element.count.toLowerCase().includes(searchString) ||
            element.year.toLowerCase().includes(searchString)||
            element.shape.toLowerCase().includes(searchString)||
            element.color.toLowerCase().includes(searchString)||
            element.size.toLowerCase().includes(searchString)  
        )
    });
    // displayToys(filterToys);
    // contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
    // bigSlot.innerHTML = `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
    console.log(filterToys);
    renderToys(filterToys)
})


    const renderToys = (toy) => {
        const htmlString = toy
            .map((toys) => {
                return  `<div class="card ${toys.name} ${toys.shape} ${toys.num} ${toys.count} ${toys.year} ${toys.color} ${toys.size}"> <h2 class="titleCard">${toys.name}</h2><img class="cardImage" src="toys/${toys.num}.png" alt="${toys.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${toys.count}</span></p><p class="year"> Год покупки:<span>${toys.year}</span></p> <p class="shape"> Форма:<span>${toys.shape}</span></p>  <p class="colour"> Цвет:<span>${toys.color}</span></p> <p class="size"> Размер:<span>${toys.size}</span></p> <p class="favourite"> Любимая<span> ${toys.favorite}</span></p> </div> </div>`;  
            })
            .join('');
        bigSlot.innerHTML = htmlString;
    };

























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

