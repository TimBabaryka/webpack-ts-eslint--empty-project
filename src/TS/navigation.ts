import data from './data';

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

const dressTreePage = document.querySelector('.dressTreePage') as HTMLInputElement;
const tree = document.querySelector('.tree') as HTMLInputElement;
const treeCH = document.querySelector('.treeCH') as HTMLInputElement;
const backToMainFromTree = document.querySelector('.backToMainFromTree') as HTMLInputElement;
const selectToys = document.querySelector('.selectToys') as HTMLInputElement;
// const chooseToy = document.querySelector(".chooseToy");

let constLS:number[];
export function getItems() {
  const tempLS: string | null = localStorage.getItem('toysNumber');
  constLS = JSON.parse(tempLS as string);
  return constLS;
}

export function renderLSToys() {
  contentTemp.forEach((element:Count) => {
    if (constLS !== null) {
      if (constLS.includes(+element.num)) {
        selectToys.innerHTML += `
       <div class="toyCard" data-drop-target="true">
      </h2><img class="toyImage" id="${element.num}-${element.count}" src="toys/${element.num}.png" draggable="true" alt="${element.num}">
      <p class="selectedCount">${element.count}</p> 
      </h2>
      </div>`;
      }
    } else if (+element.num < 20) {
      selectToys.innerHTML += `
       <div class="toyCard" data-drop-target="true">
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

  const draggable = document.querySelectorAll('[draggable]');
  const targets = document.querySelectorAll('[data-drop-target]');
  let coordX:number;
  let coordY:number;

  function handleDragStart(e:DragEvent) {
    e.dataTransfer?.setData('text', (e.target as HTMLElement).id);
    coordY = e.offsetY;
    coordX = e.offsetX;
  }

  function handleOverDrop(e:DragEvent) {
    e.preventDefault();
    if (e.type !== 'drop') {
      return;
    }
    const draggedId = e.dataTransfer?.getData('text');
    const draggedEl = document.getElementById(draggedId as string);

    if (draggedEl) {
      draggedEl.style.position = 'absolute';
      draggedEl.style.top = `${e.pageY - coordY}px`;
      draggedEl.style.left = `${e.pageX - coordY}px`;
    }
  }

  for (let i = 0; i < targets.length; i++) {
    targets[i].addEventListener('dragover', (e) => {
      handleOverDrop(e as DragEvent);
    });
    targets[i].addEventListener('drop', (e) => {
      handleOverDrop(e as DragEvent);
    });
  }
  for (let i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener('dragstart', (e) => {
      handleDragStart(e as DragEvent);
    });
  }
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
