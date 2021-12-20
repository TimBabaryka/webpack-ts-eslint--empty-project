import {Count} from './interface';
import {renderFav,contentTemp,bigSlot,render} from './render';



export function removeFav(fav:boolean):void {
    const card = document.querySelectorAll(".card").forEach(elem => {
        if (elem.classList.contains(`${fav}`)) {
            elem.remove()  
       }
   });
}
 export function sortFavourite() {
    const favourite: HTMLInputElement = document.getElementById("favourite") as HTMLInputElement;
    if (favourite.checked) {
        contentTemp.sort(function (a:Count,b:Count):number {
           if (a.favorite > b.favorite) {
               return -1;
           } if (a.favorite < b.favorite) {
               return 1;
           } else {
               return 0;
           }    
       });
       renderFav();
    } else {
      removeFav(true)
    }
};
