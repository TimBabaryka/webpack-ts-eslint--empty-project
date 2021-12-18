
import {bigSlot, renderSize} from './render';


const small = document.getElementById("small") as HTMLInputElement;
const medium = document.getElementById("medium") as HTMLInputElement;
const big = document.getElementById("big") as HTMLInputElement;



export function smallSize() {
    if(small.checked) {
        
        renderSize("малый")
    } else {
        bigSlot.innerHTML ="";
    }
}


export function mediumSize() {
    if(medium.checked) {
        
        renderSize("средний")
    } else {
        bigSlot.innerHTML ="";
    }
}

export function bigSize() {
    if(big.checked) {
      
        renderSize("большой")
    } else {
        bigSlot.innerHTML ="";
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