import {Count} from './interface';
import {render,contentTemp,bigSlot} from './render';
import data from './data';



const fromAB = document.getElementById("fromAB")as HTMLInputElement;
const fromBA = document.getElementById("fromBA")as HTMLInputElement;
const from10 = document.getElementById("from10")as HTMLInputElement;
const from01 = document.getElementById("from01")as HTMLInputElement;

const all = document.querySelector(".dropdown-content");
const all4 = document.querySelector(".dropdown-content");

export function sort4Buttons() {
    all4?.addEventListener("click", (e)=>{
        let contentTemp = JSON.parse(JSON.stringify(data));
        
        if(e.target == fromAB) {
            contentTemp.sort(function (a:Count,b:Count):number {
                if (a.name < b.name) {
                    return -1;
                } if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }    
            });
        }  else if(e.target == fromBA) {
            contentTemp.sort(function (a:Count,b:Count):number {
                if (a.name > b.name) {
                    return -1;
                } if (a.name < b.name) {
                    return 1;
                } else {
                    return 0;
                }    
            });
        }  else if(e.target == from01){
            contentTemp.sort((a,b) => a.count - b.count); 
        }
        else if(e.target == from10){
            contentTemp.sort((a,b) => b.count - a.count); 
        }
            const filterToys = contentTemp.filter((element) => {
                return (
                    element.count||
                    element.size||
                    element.name
                )
            });
          
            
            renderToys(filterToys)
            
        })
}





    const searchBar = document.querySelector(".search-input");
    searchBar?.addEventListener("keyup", (e:Event)=>{
        const searchString = (e.target as HTMLInputElement).value.toLowerCase();
    
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
    
    







// export function allIn(e:Event) {
//         if (e.target == fromAB){
//             sortAB();
//         } else if (e.target == fromBA) {
//             sortBA();
//         } else if (e.target == from10) { 
//             sort10();     
//         }  else if (e.target == from01) {
//             sort01();
//         };  
//         bigSlot.innerHTML = "";
//         render();
//     }


// export function sortBA() {
//     contentTemp.sort(function (a:Count,b:Count):number {
//         if (a.name > b.name) {
//             return -1;
//         } if (a.name < b.name) {
//             return 1;
//         } else {
//             return 0;
//         }    
//     });
// }
// export function sortAB() {
//     contentTemp.sort(function (a:Count,b:Count):number {
//         if (a.name < b.name) {
//             return -1;
//         } if (a.name > b.name) {
//             return 1;
//         } else {
//             return 0;
//         }    
//     });
// }

// export function sort10() {
//     contentTemp.sort(function (a:Count,b:Count):number {
//         if (a.count > b.count) {
//             return -1;
//         } if (a.count < b.count) {
//             return 1;
//         } else {
//             return 0;
//         }    
//     });
// }
// export function sort01() {
//     contentTemp.sort(function (a:Count,b:Count):number {
//         if (a.count < b.count) {
//             return -1;
//         } if (a.count> b.count) {
//             return 1;
//         } else {
//             return 0;
//         }    
//     });
// }


 


// console.log(contentTemp)