import './style.scss';
import {mainPage,settingPage} from './TS/navigation';
import {sortFavourite,lolo} from './TS/toysSort';
// import {playSong} from './music';

const CategoryAll = document.getElementById("categoryAll")as HTMLInputElement;
const favourite: HTMLInputElement = document.getElementById("favourite") as HTMLInputElement;
const fromAB: HTMLInputElement =document.getElementById("fromAB")as HTMLInputElement;

// CategoryAll.addEventListener("change",toys);
favourite.addEventListener("change",sortFavourite); //display favourite only

fromAB.addEventListener("click",lolo);

settingPage();
mainPage();

// playSong();


