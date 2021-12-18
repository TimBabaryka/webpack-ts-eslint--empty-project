import {Count} from './interface';
import {removeCard,contentTemp,bigSlot, renderColor, } from './render';

const whiteB = document.getElementById("white") as HTMLInputElement;
const yellowB = document.getElementById("yellow") as HTMLInputElement;
const redB = document.getElementById("red") as HTMLInputElement;
const blueB = document.getElementById("blue") as HTMLInputElement;
const greenB = document.getElementById("green") as HTMLInputElement;




export function whiteColor(){

   if (whiteB.checked ) { 
       
      removeCard("белый");
      // renderColor("белый")
    } else  {
      // bigSlot.innerHTML =""; 
      removeCard("белый");
    } 
   }

export function yellowColor(){

   if (yellowB.checked ) { 
      
      renderColor("желтый")
      } else  {
      bigSlot.innerHTML =""; 
      } 
   }


export function redColor(){

   if (redB.checked ) { 
      renderColor("красный")
      } else  {
      bigSlot.innerHTML =""; 
      } 
   }

export function blueColor(){

   if (blueB.checked ) { 
      renderColor("синий")
      } else  {
      bigSlot.innerHTML =""; 
      }
   }

export function greenColor(){

   if (greenB.checked ) { 
      renderColor("зелёный")
      } else  {
      bigSlot.innerHTML =""; 
      }
   }




       
      //  if (yellowB.checked) {
      //     renderColor("желтый")
      //  } else if(!yellowB.checked){
      //    bigSlot.innerHTML="";
      //  }
       
      //  if (redB.checked) {
      //     renderColor("красный")
      //  } else if(!redB.checked){
      //    bigSlot.innerHTML="";
      //  }
       
      //  if (blueB.checked) {
      //     renderColor("синий")
      //  } else if(!blueB.checked){
      //    bigSlot.innerHTML="";
      //  }


      //   if (greenB.checked) {
      //     renderColor("зелёный")
      //  } else if(greenB.checked) {
      //    bigSlot.innerHTML="";
      //  }





  


function sortWhite(){
   contentTemp.sort(function (a:Count,b:Count):number {
      if (a.color < b.color) {
          return -1;
      } if (a.color < b.color) {
          return 1;
      } else {
          return 0;
      }    
  });
}
 




















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

   


   


  
 
    





    

      

    
   
