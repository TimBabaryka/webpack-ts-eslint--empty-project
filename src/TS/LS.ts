
// let mynew = localStorage.getItem("toys");
// let rtu= JSON.parse(mynew);

const numOfToys = document.querySelector(".numberToys") as HTMLInputElement;
export let myArray=[];
let toysState = {
    numberOfToys: 0,   
};
function displayNumber(num) {
numOfToys.innerHTML=`игрушек:${num}`;
};




export function addtoLS(e:Event) {
    let card = document.querySelectorAll(".card");
        if(e.target.alt && toysState.numberOfToys <20) {
            myArray.push(e.target.alt)   
            toysState.numberOfToys++;
            card.forEach(element => {
                element.style.backgroundColor = "red";
            });
            // card.style.backgroundColor =+ "red"
            displayNumber(toysState.numberOfToys);
            localStorage.setItem("toysNumber", JSON.stringify(myArray));
           } else if (e.target.alt && toysState.numberOfToys ==20) {
            alert("Превышен лимит игрушек")
           }
    };


const resetLS= document.querySelector(".resetSettings");
resetLS?.addEventListener("click", () => {
    const card = document.querySelectorAll(".card");
     myArray=[];
     toysState.numberOfToys =0;
     displayNumber(toysState.numberOfToys);

     card.forEach(element => {
        element.style.backgroundColor ="transparent";
    });
     
     localStorage.clear();
});