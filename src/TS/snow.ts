const canvas =document.getElementById("canvas")as HTMLInputElement;;
const ctx =canvas.getContext("2d") as HTMLInputElement;
let particlesOnScreen = 245;

let particleArray:any=[];
let w:any,h:any;
w=canvas.width =window.innerWidth;
h =canvas.height =window.innerHeight;


function ranNum (min:number,max:number) {
    return min +Math.random() *(max-min +1)
};

function clientResize(ev:any) {
    w=canvas.width =window.innerWidth;
    h =canvas.height =window.innerHeight;
};

window.addEventListener("resize",clientResize);

export function createSnow() {
    for(let i=0; i<particlesOnScreen; i++){
        particleArray.push({
            x:Math.random() * w,
            y:Math.random() * h,
            opacity: Math.random(),
            speedX: ranNum(-11,11),
            speedY: ranNum(7,15),
            radius:ranNum(0.5,4.2),

        })
    }

};

function drawSnow(){
    for(let i=0; i<particleArray.length; i++){
        let gradient = ctx.createRadialGradient(
            particleArray[i].x,
            particleArray[i].y,
            0,
            particleArray[i].x,
            particleArray[i].y,
            particleArray[i].radius);
            gradient.addColorStop(0, "rgba(255,10,255," + particleArray[i].opacity +")"); //white
            gradient.addColorStop(.8, "rgba(210,236,242," + particleArray[i].opacity +")"); //bluish
            gradient.addColorStop(1, "rgba(237,247,249," + particleArray[i].opacity +")"); // liightbluish
            ctx.beginPath();
            ctx.arc(
                particleArray[i].x,
                particleArray[i].y,
                particleArray[i].radius,
                0,
                Math.PI *2,
                false
            );
            ctx.fillStyle = gradient;
            ctx.fill();
    }
};

function moveSnow(){
    for(let i=0; i<particleArray.length; i++){
        particleArray[i].x +=particleArray[i].speedX;
        particleArray[i].y +=particleArray[i].speedY;
        if (particleArray[i].y > h){
            particleArray[i].x =Math.random() * w *1.5;
            particleArray[i].y = -50;
        }
    }
};

export function updateSnow(){
    ctx.clearRect(0,0,w,h);
    drawSnow();
    moveSnow();
};

setInterval(updateSnow,50);
createSnow();