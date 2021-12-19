
// let mynew = localStorage.getItem("toys");
// let rtu= JSON.parse(mynew);

const numOfToys = document.querySelector(".numberToys") as HTMLInputElement;
export let myArray=[];
let toysState = {
    numberOfToys: 0,   
};
function displayNumber(num:string) {
numOfToys.innerHTML=`игрушек:${num}`;
};


// function addnumber(num){
//     let tempArray=[];
//     localStorage.setItem(`${num}`, JSON.stringify(`${num}`) );
//     console.log("add")
// }

// function deleteNum(num) {
//     let tempArray=[];
//     localStorage.removeItem(`${num}`, JSON.stringify(`${num}`));
//     console.log("delete" )
// }

export function addtoLS(e:Event) {
    let card = document.querySelectorAll<HTMLInputElement>(".card");

        if (myArray.includes(e.target.alt)){
            myArray.pop(e.target.alt)
            // console.log("remove" + e.target.alt)
            
            // deleteNum(e.target.alt)
            toysState.numberOfToys--;
            displayNumber(toysState.numberOfToys);
           
        }  else if(e.target.alt && toysState.numberOfToys <20) {
            // console.log(myArray)
            myArray.push(e.target.alt)   
            toysState.numberOfToys++;
            // card.forEach(element => {
            //     element.style.backgroundColor = "red";
            // });
            // card.style.backgroundColor =+ "red"
            displayNumber(toysState.numberOfToys);
            // addnumber(e.target.alt)
           } else if (e.target.alt && toysState.numberOfToys ==20) {
            alert("Превышен лимит игрушек")
           }  
    };


    export function addtoLocalSaved() {
        localStorage.setItem("toysNumber", JSON.stringify(myArray));
       
    };

const resetLS= document.querySelector(".resetSettings") as HTMLInputElement;
resetLS?.addEventListener("click", () => {
    const card = document.querySelectorAll<HTMLInputElement>(".card");
     myArray=[];
     toysState.numberOfToys =0;
     
     displayNumber(toysState.numberOfToys);

     card.forEach(element => {
        element.style.backgroundColor ="transparent";
    }); 
     localStorage.clear();
});