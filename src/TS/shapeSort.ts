import {renderShape} from './render';


const bell = document.getElementById("bell") as HTMLInputElement;
const ball = document.getElementById("ball") as HTMLInputElement;
const pine = document.getElementById("pine") as HTMLInputElement;
const snowFlake1 = document.getElementById("snowFlake1") as HTMLInputElement;
const bird = document.getElementById("bird") as HTMLInputElement;



export function removeShape(shape:string):void {
    const card = document.querySelectorAll(".card").forEach(elem => {
        if (elem.classList.contains(`${shape}`)) {
            elem.remove()  
       }
   });
}



export function bellShape() {
    
    if(bell.checked) {
        renderShape("колокольчик");
    } else {
        removeShape("колокольчик");
    }
}

export function ballShape() {
    
    if(ball.checked) {
        
        renderShape("шар");
    } else {
        
        removeShape("шар");
    }
}




export function pineShape() {
    
    if(pine.checked) { 
        renderShape("шишка");
    } else {
        removeShape("шишка");
    }
};



export function snowFlakeShape() {
    if(snowFlake1.checked) {
        console.log(123)
        renderShape("снежинка");
    } else {
        removeShape("снежинка");
    }
};

export function birdShape() {
    if(bird.checked) {
        renderShape("фигурка");
    } else {
        removeShape("фигурка");
    }
};