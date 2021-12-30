import { Count } from './interface';
import { bigSlot } from './render';
import data from './data';

const fromAB = document.getElementById('fromAB') as HTMLInputElement;
const fromBA = document.getElementById('fromBA') as HTMLInputElement;
const from10 = document.getElementById('from10') as HTMLInputElement;
const from01 = document.getElementById('from01') as HTMLInputElement;
const all4 = document.querySelector('.dropdown-content');

const renderToys = (toy:Count[]) => {
  const htmlString = toy
    .map((toys:Count) => `<div class="card ${toys.name} ${toys.shape} ${toys.num} ${toys.count} ${toys.year} ${toys.color} ${toys.size}"> <h2 class="titleCard">${toys.name}</h2><img class="cardImage" src="toys/${toys.num}.png" alt="${toys.num}"><div class="cardDescrp"> <p class="count"> Количество:<span>${toys.count}</span></p><p class="year"> Год покупки:<span>${toys.year}</span></p> <p class="shape"> Форма:<span>${toys.shape}</span></p>  <p class="colour"> Цвет:<span>${toys.color}</span></p> <p class="size"> Размер:<span>${toys.size}</span></p> <p class="favourite"> Любимая<span> ${toys.favorite}</span></p> </div> </div>`)
    .join('');
  bigSlot.innerHTML = htmlString;
};

export function sort4Buttons() {
  all4?.addEventListener('click', (e) => {
    const contentTemp:Count[] = JSON.parse(JSON.stringify(data));

    if (e.target === fromAB) {
      contentTemp.sort((a:Count, b:Count):number => {
        if (a.name < b.name) {
          return -1;
        } if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (e.target === fromBA) {
      contentTemp.sort((a:Count, b:Count):number => {
        if (a.name > b.name) {
          return -1;
        } if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (e.target === from01) {
      contentTemp.sort((a, b) => +a.count - +b.count);
    } else if (e.target === from10) {
      contentTemp.sort((a, b) => +b.count - +a.count);
    }
    const filterToys = contentTemp.filter((element:Count) => (
      element.count
        || element.size
        || element.name
    ));

    renderToys(filterToys);
  });
}

const searchBar = document.querySelector('.search-input');
searchBar?.addEventListener('keyup', (e:Event) => {
  const searchString = (e.target as HTMLInputElement).value.toLowerCase();

  const filterToys = data.filter((element) => (
    element.name.toLowerCase().includes(searchString)
      || element.num.toLowerCase().includes(searchString)
      || element.count.toLowerCase().includes(searchString)
      || element.year.toLowerCase().includes(searchString)
      || element.shape.toLowerCase().includes(searchString)
      || element.color.toLowerCase().includes(searchString)
      || element.size.toLowerCase().includes(searchString)
  ));
  console.log(filterToys);
  renderToys(filterToys);
});
