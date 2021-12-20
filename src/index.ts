import './style.scss';
import {
  greenColor, blueColor, redColor, whiteColor, yellowColor,
} from './TS/colorSort';
import { smallSize, mediumSize, bigSize } from './TS/sizeSort';
import { mainPage, settingPage } from './TS/navigation';
import { playSong } from './TS/music';
import {
  bellShape, ballShape, pineShape, snowFlakeShape, birdShape,
} from './TS/shapeSort';
import { addtoLS, addtoLocalSaved } from './TS/LS';
import { sort4Buttons } from './TS/sortByButton';
import { sortFavourite } from './TS/sortByFAv';
import { createSnow, updateSnow } from './TS/snow';

// import {sortAll} from './TS/categoryAll';

import { bigSlot, render, contentTemp } from './TS/render';
// import data from './TS/data';

const myAudio = document.querySelector('.audio');
// const CategoryAll = document.getElementById("categoryAll") as HTMLInputElement;
const favourite = document.getElementById('favourite') as HTMLInputElement;
const small = document.getElementById('small') as HTMLInputElement;
const medium = document.getElementById('medium') as HTMLInputElement;
const big = document.getElementById('big') as HTMLInputElement;
small.addEventListener('click', smallSize);
big.addEventListener('click', bigSize);
medium.addEventListener('click', mediumSize);

const whiteB = document.getElementById('white') as HTMLInputElement;
const yellowB = document.getElementById('yellow') as HTMLInputElement;
const redB = document.getElementById('red') as HTMLInputElement;
const blueB = document.getElementById('blue') as HTMLInputElement;
const greenB = document.getElementById('green') as HTMLInputElement;
whiteB.addEventListener('click', whiteColor);
yellowB.addEventListener('click', yellowColor);
redB.addEventListener('click', redColor);
blueB.addEventListener('click', blueColor);
greenB.addEventListener('click', greenColor);

const all4 = document.querySelector('.dropdown-content');
favourite.addEventListener('change', sortFavourite); // display favourite only
all4?.addEventListener('click', sort4Buttons); // dropdow Sort
myAudio?.addEventListener('click', playSong); // music

render();
sort4Buttons();
settingPage();
mainPage();

const addLS = document.querySelectorAll<HTMLElement>('.bigSlot').forEach((box) => box.addEventListener('click', addtoLS));
const buttonSave = document.querySelector('.savetoLS');
buttonSave?.addEventListener('click', addtoLocalSaved);

const bell = document.getElementById('bell') as HTMLInputElement;
const ball = document.getElementById('ball') as HTMLInputElement;
const pine = document.getElementById('pine') as HTMLInputElement;
const snowFlake1 = document.getElementById('snowFlake1') as HTMLInputElement;
const bird = document.getElementById('bird') as HTMLInputElement;

bell?.addEventListener('click', bellShape);
ball?.addEventListener('click', ballShape);
pine?.addEventListener('click', pineShape);
snowFlake1?.addEventListener('click', snowFlakeShape);
bird?.addEventListener('click', birdShape);

const snowFflakes = document.getElementById('snowFlake') as HTMLInputElement;
const canvas = document.getElementById('canvas') as HTMLInputElement;
const setting = document.querySelector('.settings') as HTMLInputElement;

function snowOnn() {
  if (snowFflakes.checked) {
    setting.appendChild(canvas);
    setInterval(updateSnow, 50);
    setTimeout(createSnow, 10);
  } else {
    setting.removeChild(canvas);
  }
}
snowFflakes.addEventListener('click', snowOnn);

console.log(`Работае только в категориях, при перечечении с другой категорией накладывается друг на друга.

1.Страница с игрушками содержит карточки всех игрушек а также фильтры,
 строку поиска, поле для сортировки. Выполняются требования к вёрстке +10

2.Карточка игрушки содержит её изображение, название,
 текстом или условным значком обозначено количество экземпляров,
год покупки, форма, цвет, размер, является ли игрушка любимой +10


Добавление игрушек в избранное +20
кликая по карточке с игрушкой или по кнопке на ней игрушку можно добавлять в избранное
 или удалять из избранного. Карточки добавленных в избранное
 игрушек внешне отличаются от остальных +10
на странице отображается количество добавленных в избранное игрушек.
 При попытке добавить в избранное больше 20 игрушек,
 выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10


Сортировка +20
Сортируются только те игрушки, которые в данный момент отображаются на странице
сортировка игрушек по названию в возрастающем и спадающем порядке +10
сортировка игрушек по году их приобретения в возрастающем и спадающем порядке +10

Фильтры по значению +30
Выбранные фильтры выделяются стилем.
фильтры по форме +5
фильтры по цвету +5
фильтры по размеру +5
можно отобразить только любимые игрушки +5
можно отфильтровать игрушки по нескольким фильтрам одного типа +10


Сброс фильтров +20
есть кнопка reset для сброса фильтров +10
Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или игрушки, добавленные в избранное.
После использования кнопки reset фильтры остаются работоспособными
при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным, range slider закрашивается одним цветом +10

Сохранение настроек в local storage +10
выбранные пользователем фильтры, порядок сортировки, добавленные в избранное игрушки сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10

Поиск +26
при вводе поискового запроса на странице остаются только те игрушки, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10
Поиск ведётся только среди игрушек, которые в данный момент отображаются на странице.
если очистить поле поиска, на странице отображаются игрушки, соответствующие всем выбранным фильтрам и настройкам сортировки +10


Дополнительный функционал на выбор +15/20

снежинки +10
зацикленная музыка +5


не выполнено
 5. Фильтры в указанном диапазоне от и до 
фильтры по количеству экземпляров 
фильтры по году покупки 
для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение, разный цвет слайдера до и после ползунка +10
Range slider можно создать на основе input[type=range] - пример или использовать для этой цели библиотеку noUiSlider, или другую на ваш выбор

Можно отфильтровать игрушки по нескольким фильтрам разного типа 
Для нескольких фильтров разного типа отображаются только те игрушки, которые соответствуют всем выбранным фильтрам.
Например, можно отобразить только синие шары. Или любимые белые и красные игрушки купленные в 1940-1960 годах.
Если игрушек, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, например, "Извините, совпадений не обнаружено"


151/200`);
