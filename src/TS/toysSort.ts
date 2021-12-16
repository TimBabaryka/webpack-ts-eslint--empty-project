import data from './data';

const bigSlot: HTMLInputElement = document.querySelector('.bigSlot') as HTMLInputElement;

let contentTemp = JSON.parse(JSON.stringify(data));

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
interface Count {
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean;
}
    // function render() {
    //     contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
    //         bigSlot.innerHTML += `<div class="card"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="./assets/addImages/1.jpg" alt="toy"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
    //      });  
    // }; 
const fromAB: HTMLInputElement =document.getElementById("fromAB")as HTMLInputElement;
export function lolo(){
    if( event.target == fromAB){
        console.log("work")
    }
}

      function render1() {
        contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
            if(favorite == true) {
                bigSlot.innerHTML += `<div class="card"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="./assets/addImages/1.jpg" alt="toy"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite">Любимая</p> </div> </div>`
            } else {
                bigSlot.innerHTML += "";     
            }    
         });  
    }; 

     export function sortFavourite() {
        const favourite: HTMLInputElement = document.getElementById("favourite") as HTMLInputElement;
        if (favourite.checked) {
            contentTemp.sort(function (a:Count,b:Count):number {
               if (a.favorite > b.favorite) {
                   return -1;
               } if (a.favorite < b.favorite) {
                   return 1;
               } else {
                   return 0;
                }    
           });
           render1();
        } else {
          bigSlot.innerHTML = "";
        }
    };


   
    

    // function noFavourite() {

    //     contentTemp.sort(function (a:Count,b:Count):number {
    //            if(a.year.toLowerCase() < b.year.toLowerCase()){
    //                return -1;
    //            } if(a.year.toLowerCase() > b.year.toLowerCase()) {
    //                return 1;
    //            } else {
    //                return 0;
    //            }
    //        }); //sort everything but favorite
    //        console.log("sorted")
    //    }


  
   
    // const categoryAll: HTMLInputElement = document.getElementById("categoryAll") as HTMLInputElement;
    // if(categoryAll.checked) {
    //     render()
    //     } else {
    //       bigSlot.innerHTML = "";
    //      }
    // };
   
    
   
 // category all




    

      

    
   
