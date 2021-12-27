import data from './data';
import {displayNumber} from './LS';

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

const dressTreePage = document.querySelector(".dressTreePage")as HTMLInputElement;
const tree = document.querySelector(".tree")as HTMLInputElement;
const treeCH = document.querySelector(".treeCH")as HTMLInputElement;
const backToMainFromTree = document.querySelector(".backToMainFromTree")as HTMLInputElement;
// const chooseToy = document.querySelector(".chooseToy");




export function toTree() {
  selectToys.innerHTML = "";
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
};


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



export let constLS;
export function getItems() {
  
     let tempLS = localStorage.getItem("toysNumber");
    constLS = JSON.parse(tempLS)
    return constLS;
   
};

const selectToys = document.querySelector(".selectToys");
export function renderLSToys() {
  
  contentTemp.forEach(element => {
    
    if(constLS.includes(element.num)) {
      selectToys.innerHTML +=`
       <div class="toyCard">
      </h2><img class="toyImage" id="${element.num}-${element.count}" src="toys/${element.num}.png" draggable="true" alt="${element.num}">
      <p class="selectedCount">${element.count}</p> 
      </h2>
      </div>`
      
    }  
  });
};





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