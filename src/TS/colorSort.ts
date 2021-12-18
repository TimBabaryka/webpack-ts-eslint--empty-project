import {Count} from './interface';
import {contentTemp,renderColor, } from './render';

const whiteB = document.getElementById("white") as HTMLInputElement;
const yellowB = document.getElementById("yellow") as HTMLInputElement;
const redB = document.getElementById("red") as HTMLInputElement;
const blueB = document.getElementById("blue") as HTMLInputElement;
const greenB = document.getElementById("green") as HTMLInputElement;

export function removeCard(color:string):void {
   const card = document.querySelectorAll(".card").forEach(elem => {
       if (elem.classList.contains(`${color}`)) {
           elem.remove() 
      }
  });
}


export function whiteColor() {
   if (whiteB.checked ) { 
      renderColor("белый")
    } else  {
      // bigSlot.innerHTML =""; 
      removeCard("белый");
    } 
   }

export function yellowColor() {
   if (yellowB.checked ) { 
      renderColor("желтый")
      } else  {
         removeCard("желтый");
      } 
   }

export function redColor() {
   if (redB.checked ) { 
      renderColor("красный")
      } else  {
         removeCard("красный");
      } 
   }

export function blueColor() {
   if (blueB.checked ) { 
      renderColor("синий")
      } else  {
         removeCard("синий");
      }
   }

export function greenColor() {
   if (greenB.checked ) { 
      renderColor("зелёный")
      } else  {
         removeCard("зелёный");
      }
   }


// function sortWhite(){
//    contentTemp.sort(function (a:Count,b:Count):number {
//       if (a.color < b.color) {
//           return -1;
//       } if (a.color < b.color) {
//           return 1;
//       } else {
//           return 0;
//       }    
//   });
// }
 




















   // { name,num,count,year,shape,color,size,favorite}
//  <div class="card"> 
// <h2 class="titleCard">${name}</h2>
// <img class="cardImage" src="./assets/addImages/1.jpg" alt="toy">
// <div class="cardDescrp">
//   <p class="count"> Количество:<span>${count}</span></p>
//   <p class="year"> Год покупки:<span>${year}</span></p>
//   <p class="shape"> Форма:<span>${shape}</span></p>
//   <p class="colour"> Цвет:<span>${color}</span></p>
//   <p class="size"> Размер:<span>${size}</span></p>
//   <p class="favourite"> Любимая<span>${favourite}</span></p>
// </div>
// </div> 

   


   


  
 
    





    

      

    
   
