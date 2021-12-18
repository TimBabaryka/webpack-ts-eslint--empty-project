import data from './data';
export let contentTemp = JSON.parse(JSON.stringify(data));
export const bigSlot = document.querySelector('.bigSlot') as HTMLInputElement;

export function render():void {
    contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
        bigSlot.innerHTML += `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
     });  
}; 

export function renderFav():void {
    contentTemp.forEach(( {name,num,count,year,shape,color,size,favorite}):void => {
        if(favorite == true) {
            bigSlot.innerHTML += `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size} ${favorite}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite">Любимая <span> ${favorite}</span> </p> </div> </div>`
        }  
     });  
}; 


export function renderColor(nameColor:string):void {
    contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
        if(color == `${nameColor}`)
        
        bigSlot.innerHTML += `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
     });  
}; 


export function renderSize(nameColor:string):void {
    contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
        if(size == `${nameColor}`)
        bigSlot.innerHTML += `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
     });  
 
}; 
export function renderShape(nameColor:string):void {
    contentTemp.forEach (({name,num,count,year,shape,color,size,favorite}):void => {
        if(shape == `${nameColor}`)
        bigSlot.innerHTML += `<div class="card ${name} ${shape} ${num} ${count} ${year} ${color} ${size}"> <h2 class="titleCard">${name}</h2><img class="cardImage" src="toys/${num}.png" alt="${num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${count}</span></p><p class="year"> Год покупки:<span>${year}</span></p> <p class="shape"> Форма:<span>${shape}</span></p>  <p class="colour"> Цвет:<span>${color}</span></p> <p class="size"> Размер:<span>${size}</span></p> <p class="favourite"> Любимая<span> ${favorite}</span></p> </div> </div>`
     });  
 
}; 







   

// contentTemp.forEach(({color}) => {
//         if(color == `${nameColor}`) {
//             bigSlot.innerHTML += "";
//             // card.style.backgroundColor += "red";
//             console.log(1);
//         } 
//     });



// };



  