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
      </h2><img class="toyImage" src="toys/${element.num}.png" alt="${element.num}">
      <p class="selectedCount">${element.count}</p> 
      </h2>
      </div>`
      
    }  
  });
};