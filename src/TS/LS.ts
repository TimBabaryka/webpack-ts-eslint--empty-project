// import { constLS } from './navigation';

const numOfToys = document.querySelector('.numberToys') as HTMLInputElement;
const numOfToysTree = document.querySelector('.numberToystree') as HTMLInputElement;
let myArray:string[] = [];
const colorArray:string[] = [];
const toysState = {
  numberOfToys: 0,
};

export function displayNumber(num:string) {
  numOfToys.innerHTML = `Игрушек:${num}`;
  numOfToysTree.innerHTML = `Игрушек:${num}`;
}

export function addtoLS(e:any):void {
  const card = document.querySelectorAll<HTMLInputElement>('.card');

  if (myArray.includes(e.target.alt)) {
    myArray.splice(myArray.indexOf(e.target.alt), 1);
    colorArray.splice(colorArray.indexOf(e.target.alt), 1);

    e.target.style.backgroundColor = 'transparent';

    toysState.numberOfToys--;

    displayNumber(toysState.numberOfToys.toString());
  } else if (e.target.alt && toysState.numberOfToys < 20) {
    myArray.push(e.target.alt);
    colorArray.push(e.target.alt);
    toysState.numberOfToys++;

    e.target.style.backgroundColor = '#FFE4C4';
    displayNumber(toysState.numberOfToys.toString());
  } else if (e.target.alt && toysState.numberOfToys === 20) {
    alert('Превышен лимит игрушек');
  }
}

export function addtoLocalSaved() {
  localStorage.setItem('toysNumber', JSON.stringify(myArray));
}

const resetLS = document.querySelector('.resetSettings') as HTMLInputElement;
resetLS?.addEventListener('click', () => {
  const card = document.querySelectorAll<HTMLInputElement>('.card');
  myArray = [];
  toysState.numberOfToys = 0;

  displayNumber(toysState.numberOfToys.toString());

  card.forEach((element) => {
    element.style.backgroundColor = 'transparent';
  });
  localStorage.clear();
});
