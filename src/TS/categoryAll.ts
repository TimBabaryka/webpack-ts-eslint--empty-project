import {Count} from './interface';
import {render,contentTemp,bigSlot} from './render';

//  function noFavourite() {

//         contentTemp.sort(function (a:Count,b:Count):number {
//                if(a.year.toLowerCase() < b.year.toLowerCase()){
//                    return -1;
//                } if(a.year.toLowerCase() > b.year.toLowerCase()) {
//                    return 1;
//                } else {
//                    return 0;
//                }
//            }); //sort everything but favorite
          
//        }

export function sortAll() {
    const categoryAll = document.getElementById("categoryAll") as HTMLInputElement;
    if (categoryAll.checked) {
        contentTemp.sort(function (a:Count,b:Count):number {
           if (a.favorite > b.favorite) {
               return -1;
           } if (a.favorite < b.favorite) {
               return 1;
           } else {
               return 0;
           }    
       });
       render();
    } else {
      bigSlot.innerHTML = "";
    }
};





