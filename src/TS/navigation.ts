import data from './data';
// import { displayNumber } from './LS';
import { Count } from './interface';

const settings = document.querySelector('.settings') as HTMLInputElement;
const main = document.querySelector('.mainBody') as HTMLInputElement;
const toys = document.querySelector('.toys') as HTMLInputElement;

const dressBox = document.querySelector('.dressBox') as HTMLInputElement;

export const contentTemp = JSON.parse(JSON.stringify(data));

export function settingPage():void {
  document.querySelector('.backToMain')?.addEventListener('click', () => {
    main.style.display = 'grid';
    settings.style.display = 'none';
  });
} // from main to settings

export function mainPage():void {
  document.querySelector('.fromMain')?.addEventListener('click', () => {
    main.style.display = 'none';
    settings.style.display = 'grid';
    toys.style.pointerEvents = 'none';
    toys.style.color = '#24C5DB';
  });
} // from main to settings

// export function toDress() {
//     document.querySelector('.dressTreePage')?.addEventListener("click",()=> {
//     dressBox.style.display="grid";
//     settings.style.display="none"
//     console.log(22)
//     })
// } //from setting to main|| settings

const dressTreePage = document.querySelector('.dressTreePage') as HTMLInputElement;
const tree = document.querySelector('.tree') as HTMLInputElement;
const treeCH = document.querySelector('.treeCH') as HTMLInputElement;
const backToMainFromTree = document.querySelector('.backToMainFromTree') as HTMLInputElement;
const selectToys = document.querySelector('.selectToys');
// const chooseToy = document.querySelector(".chooseToy");

let constLS;
export function getItems() {
  const tempLS = localStorage.getItem('toysNumber');
  constLS = JSON.parse(tempLS);
  return constLS;
}

export function renderLSToys() {
  contentTemp.forEach((element) => {
    if (constLS !== null) {
      if (constLS.includes(element.num)) {
        selectToys.innerHTML += `
       <div class="toyCard">
      </h2><img class="toyImage" id="${element.num}-${element.count}" src="toys/${element.num}.png" draggable="true" alt="${element.num}">
      <p class="selectedCount">${element.count}</p> 
      </h2>
      </div>`;
      }
    } else if (element.num < 20) {
      selectToys.innerHTML += `
       <div class="toyCard">
      </h2><img class="toyImage" id="${element.num}-${element.count}" src="toys/${element.num}.png" draggable="true" alt="${element.num}">
      <p class="selectedCount">${element.count}</p> 
      </h2>
      </div>`;
    }
  });
}

export function toTree() {
  selectToys.innerHTML = '';
  settings.style.display = 'none';
  tree.style.display = 'grid';
  treeCH.style.color = '#24C5DB';
  treeCH.style.pointerEvents = 'none';
  getItems();
  renderLSToys();
  // dropZone2.ondragover = allowDrop
  // dropZone2.ondrop = drop;
  // dragObject.ondragstart = drag;
  // displayNumber(constLS.length);
  // console.log(constLS.length)
}

export function toToysfromTree():void {
  document.querySelector('.chooseToy')?.addEventListener('click', () => {
    tree.style.display = 'none';
    settings.style.display = 'grid';
    toys.style.pointerEvents = 'none';
    toys.style.color = '#24C5DB';
  });
} // from tree to toys

export function toMainfromTree():void {
  document.querySelector('.backToMainFromTree')?.addEventListener('click', () => {
    tree.style.display = 'none';
    main.style.display = 'grid';
  });
} // from tree to main

// const zone1 = document.querySelector(".selectToys") as HTMLInputElement;
// const  dropZone = document.querySelector(".selectedCH") as HTMLInputElement;
// const  dropZone2 = document.querySelector(".dressedTrees") as HTMLInputElement;

// const dragObject = document.getElementById("1-2");
// const dragObject1 = document.getElementById("2-5");

// // dropZone2.ondragover = allowDrop
//  function allowDrop(e) {
//   console.log(e)
//   e.preventDefault();
// };

// // dragObject.ondragstart = drag;
//  function drag(e) {
//   e.dataTransfer.setData('id', e.target.id);
// };

// // dropZone2.ondrop = drop;
// function drop(e) {
//   let itemId = e.dataTransfer.getData('id');
//   console.log(itemId)
//   e.target.append(document.getElementById(itemId));
// };

// dropZone2.ondragover = allowDrop
// dropZone2.ondrop = drop;
// dragObject.ondragstart = drag;

// const numOfToys = document.querySelector('.numberToys') as HTMLInputElement;
// const numOfToysTree = document.querySelector('.numberToystree') as HTMLInputElement;
// let myArray:string[] = [];
// const colorArray:string[] = [];
// const toysState = {
//   numberOfToys: 0,
// };

// export function displayNumber(num:string) {
//   numOfToys.innerHTML = `Игрушек:${num}`;
//   numOfToysTree.innerHTML = `Игрушек:${num}`;
// }

// export function addtoLS(e:any):void {
//   const card = document.querySelectorAll<HTMLInputElement>('.card');

//   if (myArray.includes(e.target.alt)) {
//     myArray.splice(myArray.indexOf(e.target.alt), 1);
//     colorArray.splice(colorArray.indexOf(e.target.alt), 1);

//     e.target.style.backgroundColor = 'transparent';

//     toysState.numberOfToys--;

//     displayNumber(toysState.numberOfToys.toString());
//   } else if (e.target.alt && toysState.numberOfToys < 20) {
//     myArray.push(e.target.alt);
//     colorArray.push(e.target.alt);
//     toysState.numberOfToys++;

//     e.target.style.backgroundColor = '#FFE4C4';
//     displayNumber(toysState.numberOfToys.toString());
//   } else if (e.target.alt && toysState.numberOfToys === 20) {
//     alert('Превышен лимит игрушек');
//   }
// }

// export function addtoLocalSaved() {
//   localStorage.setItem('toysNumber', JSON.stringify(myArray));
// }

// const resetLS = document.querySelector('.resetSettings') as HTMLInputElement;
// resetLS?.addEventListener('click', () => {
//   const card = document.querySelectorAll<HTMLInputElement>('.card');
//   myArray = [];
//   toysState.numberOfToys = 0;

//   displayNumber(toysState.numberOfToys.toString());

//   card.forEach((element) => {
//     element.style.backgroundColor = 'transparent';
//   });
//   localStorage.clear();
// });
