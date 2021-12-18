
import {renderSize} from './render';


const small = document.getElementById("small") as HTMLInputElement;
const medium = document.getElementById("medium") as HTMLInputElement;
const big = document.getElementById("big") as HTMLInputElement;


export function removeSize(size:string):void {
    const card = document.querySelectorAll(".card").forEach(elem => {
        if (elem.classList.contains(`${size}`)) {
            elem.remove()  
       }
   });
}

export function smallSize() {
    if(small.checked) {
        
        renderSize("малый")
    } else {
        removeSize("малый")
    }
}


export function mediumSize() {
    if(medium.checked) {
        
        renderSize("средний")
    } else {
        removeSize("средний")
    }
}

export function bigSize() {
    if(big.checked) {
      
        renderSize("большой")
    } else {
        removeSize("большой")
    }
}


// function sortSize(){
//     contentTemp.sort(function (a:Count,b:Count):number {
//        if (a.size < b.size) {
//            return -1;
//        } if (a.size < b.size) {
//            return 1;
//        } else {
//            return 0;
//        }    
//    });
//  }