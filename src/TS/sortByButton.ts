import {Count} from './interface';
import {render,contentTemp,bigSlot} from './render';



const fromAB = document.getElementById("fromAB")as HTMLInputElement;
const fromBA = document.getElementById("fromBA")as HTMLInputElement;
const from10 = document.getElementById("from10")as HTMLInputElement;
const from01 = document.getElementById("from01")as HTMLInputElement;

const all = document.querySelector(".dropdown-content");

export function allIn(e:Event) {
        if (e.target == fromAB){
            sortAB();
        } else if (e.target == fromBA) {
            sortBA();
        } else if (e.target == from10) { 
            sort10();     
        }  else if (e.target == from01) {
            sort01();
        };  
        bigSlot.innerHTML = "";
        render();
    }


function sortBA() {
    contentTemp.sort(function (a:Count,b:Count):number {
        if (a.name > b.name) {
            return -1;
        } if (a.name < b.name) {
            return 1;
        } else {
            return 0;
        }    
    });
}
function sortAB() {
    contentTemp.sort(function (a:Count,b:Count):number {
        if (a.name < b.name) {
            return -1;
        } if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }    
    });
}

function sort10() {
    contentTemp.sort(function (a:Count,b:Count):number {
        if (a.count > b.count) {
            return -1;
        } if (a.count < b.count) {
            return 1;
        } else {
            return 0;
        }    
    });
}
function sort01() {
    contentTemp.sort(function (a:Count,b:Count):number {
        if (a.count < b.count) {
            return -1;
        } if (a.count> b.count) {
            return 1;
        } else {
            return 0;
        }    
    });
}


 


// function fromABF(e:Event) {
//     if (e.target == fromAB){
        
//         sortAB();
      
//        render();
//     } else {
//         bigSlot.innerHTML = "";
//       }
// }
//  function fromBAF(e:Event) {
//     if (e.target == fromBA){
        
//         sortBA();
       
//         render();
        
//     } else {
//         bigSlot.innerHTML = "";
//       }
// }

//  function from10F(e:Event) {
//     if (e.target == from10){
      
//         sort10()
//         console.log(contentTemp)
//         render();
        
//     } else {
//         bigSlot.innerHTML = "";
//       }
// }

//  function from01F(e:Event) {
//     if (e.target == from01){
        
//         sort01()
//         console.log(contentTemp)
//         render();
       
//     } else {
//         bigSlot.innerHTML = "";
//       }
// }