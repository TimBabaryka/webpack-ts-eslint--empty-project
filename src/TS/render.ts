import data from './data';
import { Count } from './interface';

export const contentTemp = JSON.parse(JSON.stringify(data));
export const bigSlot = document.querySelector('.bigSlot') as HTMLInputElement;

export function render():void {
  contentTemp.forEach((element:Count):void => {
    bigSlot.innerHTML += `<div class="card ${element.name} ${element.shape} ${element.num} ${element.count} ${element.year} ${element.color} ${element.size}"> <h2 class="titleCard">${element.name}</h2><img class="cardImage" src="toys/${element.num}.png" alt="${element.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${element.count}</span></p><p class="year"> Год покупки:<span>${element.year}</span></p> <p class="shape"> Форма:<span>${element.shape}</span></p>  <p class="colour"> Цвет:<span>${element.color}</span></p> <p class="size"> Размер:<span>${element.size}</span></p> <p class="favourite"> Любимая<span> ${element.favorite}</span></p> </div> </div>`;
  });
}

export function renderFav():void {
  contentTemp.forEach((element:Count):void => {
    if (element.favorite === true) {
      bigSlot.innerHTML += `<div class="card ${element.name} ${element.shape} ${element.num} ${element.count} ${element.year} ${element.color} ${element.size} ${element.favorite}"> <h2 class="titleCard">${element.name}</h2><img class="cardImage" src="toys/${element.num}.png" alt="${element.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${element.count}</span></p><p class="year"> Год покупки:<span>${element.year}</span></p> <p class="shape"> Форма:<span>${element.shape}</span></p>  <p class="colour"> Цвет:<span>${element.color}</span></p> <p class="size"> Размер:<span>${element.size}</span></p> <p class="favourite">Любимая <span> ${element.favorite}</span> </p> </div> </div>`;
    }
  });
}

export function renderColor(nameColor:string):void {
  contentTemp.forEach((element:Count):void => {
    if (element.color === `${nameColor}`) { bigSlot.innerHTML += `<div class="card ${element.name} ${element.shape} ${element.num} ${element.count} ${element.year} ${element.color} ${element.size}"> <h2 class="titleCard">${element.name}</h2><img class="cardImage" src="toys/${element.num}.png" alt="${element.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${element.count}</span></p><p class="year"> Год покупки:<span>${element.year}</span></p> <p class="shape"> Форма:<span>${element.shape}</span></p>  <p class="colour"> Цвет:<span>${element.color}</span></p> <p class="size"> Размер:<span>${element.size}</span></p> <p class="favourite"> Любимая<span> ${element.favorite}</span></p> </div> </div>`; }
  });
}

export function renderSize(nameColor:string):void {
  contentTemp.forEach((element:Count):void => {
    if (element.size === `${nameColor}`) { bigSlot.innerHTML += `<div class="card ${element.name} ${element.shape} ${element.num} ${element.count} ${element.year} ${element.color} ${element.size}"> <h2 class="titleCard">${element.name}</h2><img class="cardImage" src="toys/${element.num}.png" alt="${element.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${element.count}</span></p><p class="year"> Год покупки:<span>${element.year}</span></p> <p class="shape"> Форма:<span>${element.shape}</span></p>  <p class="colour"> Цвет:<span>${element.color}</span></p> <p class="size"> Размер:<span>${element.size}</span></p> <p class="favourite"> Любимая<span> ${element.favorite}</span></p> </div> </div>`; }
  });
}
export function renderShape(nameColor:string):void {
  contentTemp.forEach((element:Count):void => {
    if (element.shape === `${nameColor}`) { bigSlot.innerHTML += `<div class="card ${element.name} ${element.shape} ${element.num} ${element.count} ${element.year} ${element.color} ${element.size}"> <h2 class="titleCard">${element.name}</h2><img class="cardImage" src="toys/${element.num}.png" alt="${element.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${element.count}</span></p><p class="year"> Год покупки:<span>${element.year}</span></p> <p class="shape"> Форма:<span>${element.shape}</span></p>  <p class="colour"> Цвет:<span>${element.color}</span></p> <p class="size"> Размер:<span>${element.size}</span></p> <p class="favourite"> Любимая<span> ${element.favorite}</span></p> </div> </div>`; }
  });
}

const resetFilters = document.querySelector('.resetFilters');
function resetFilter(e:Event) {
  const ele = document.getElementsByName('chk');
  ele.forEach((element) => {
    if ((element as HTMLInputElement).type === 'checkbox') { (element as HTMLInputElement).checked = false; }
    bigSlot.innerHTML = '';
  });
}

resetFilters?.addEventListener('click', resetFilter);
