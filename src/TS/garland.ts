
const yellowSelect = document.getElementById('yellowSelect') as HTMLInputElement;
const redSelect = document.getElementById('redSelect') as HTMLInputElement;
const blueSelect = document.getElementById('blueSelect') as HTMLInputElement;
const greenSelect = document.getElementById('greenSelect') as HTMLInputElement; 
const allSelect = document.getElementById('allSelect') as HTMLInputElement;
const offLights = document.querySelector('.offLights') as HTMLInputElement;
// const garland = document.getElementsByTagName('svg') as HTMLInputElement;

const selectedCH = document.querySelector(".selectedCH");

export function selectGarland(e) {
   
    if( yellowSelect.checked) {
        offLights1();
        deselect(e);
        renderLights(`yellow2`,`yellow1`);
    }  if(redSelect.checked) {
      
        deselect(e);
     renderLights(`red1`,`red2`);
    } if(blueSelect.checked) {
        offLights1();
        deselect(e);
        renderLights(`blue1`,`blue2`);
    }  if(greenSelect.checked) {
        offLights1();
        deselect(e);
        renderLights(`green1`,`green2`);
    } 
    if (allSelect.checked) {
        offLights1();
        deselect(e);
        renderLights(`allColor1`,`allColor2`);
    
    } 
}
function deselect(e) {
    yellowSelect.checked = false;
    redSelect.checked = false;
    blueSelect.checked = false;
    greenSelect.checked = false;
    allSelect.checked = false;
    e.checked = true;
   
};
const garland = document.querySelector(".garland")

function offLights1(){
   
    garland.innerHTML="";
};

offLights.addEventListener('click',offLights1);






function renderLights( lights1,lights2){
 garland.innerHTML = `
         
         
          <circle cx="350" cy="80" r="5" class=${lights1}></circle>
          <circle cx="330" cy="90" r="5" class=${lights2}></circle>
          <circle cx="300" cy="100" r="5" class=${lights1}></circle>
          <circle cx="250" cy="110" r="5" class=${lights2}></circle>
          <circle cx="200" cy="120" r="5" class=${lights1}></circle>
          <circle cx="150" cy="140" r="5" class=${lights2}></circle>
          <circle cx="120" cy="150" r="5" class=${lights1}></circle>
          <circle cx="150" cy="170" r="5" class=${lights2}></circle>
          <circle cx="200" cy="190" r="5" class=${lights1}></circle>
          <circle cx="250" cy="210" r="5" class=${lights2}></circle>
          <circle cx="300" cy="220" r="5" class=${lights1}></circle>
          <circle cx="350" cy="240" r="5" class=${lights1}></circle>
          <circle cx="300" cy="260" r="5" class=${lights1}></circle>
          <circle cx="250" cy="280" r="5" class=${lights2}></circle>
          <circle cx="200" cy="300" r="5" class=${lights1}></circle>
          <circle cx="150" cy="320" r="5" class=${lights1}></circle>
          <circle cx="100" cy="340" r="5" class=${lights2}></circle>
          <circle cx="120" cy="360" r="5" class=${lights1}></circle>
          <circle cx="150" cy="380" r="5" class=${lights1}></circle>
          <circle cx="200" cy="400" r="5" class=${lights2}></circle>
          <circle cx="250" cy="450" r="5" class=${lights1}></circle>
          <circle cx="300" cy="480" r="5" class=${lights1}></circle>
          <circle cx="350" cy="500" r="5" class=${lights1}></circle>
          <circle cx="400" cy="550" r="5" class=${lights2}></circle>
          <circle cx="350" cy="570" r="5" class=${lights1}></circle>
          <circle cx="300" cy="590" r="5" class=${lights2}></circle>
          <circle cx="250" cy="610" r="5" class=${lights1}></circle>
          <circle cx="200" cy="630" r="5" class=${lights2}></circle>
          <circle cx="150" cy="650" r="5" class=${lights1}></circle>
          <circle cx="100" cy="670" r="5" class=${lights2}></circle>
          <circle cx="50" cy="690" r="5" class=${lights1}></circle>
          <circle cx="10" cy="710" r="5" class=${lights2}></circle>
          <circle cx="40" cy="710" r="5" class=${lights1}></circle>
          <circle cx="70" cy="710" r="5" class=${lights2}></circle>
          <circle cx="100" cy="710" r="5" class=${lights1}></circle>
          <circle cx="120" cy="710" r="5" class=${lights2}></circle>
          <circle cx="140" cy="720" r="5" class=${lights1}></circle>
          <circle cx="160" cy="720" r="5" class=${lights1}></circle>
          <circle cx="200" cy="720" r="5" class=${lights2}></circle>
          <circle cx="250" cy="730" r="5" class=${lights2}></circle>
          <circle cx="300" cy="730" r="5" class=${lights1}></circle>
          <circle cx="350" cy="730" r="5" class=${lights1}></circle>
          <circle cx="400" cy="740" r="5" class=${lights1}></circle>
          <circle cx="450" cy="750" r="5" class=${lights2}></circle>
          <circle cx="500" cy="760" r="5" class=${lights1}></circle>
          <circle cx="540" cy="770" r="5" class=${lights1}></circle>
          <circle cx="570" cy="780" r="5" class=${lights2}></circle>
          <circle cx="550" cy="790" r="5" class=${lights1}></circle>
          <circle cx="500" cy="800" r="5" class=${lights2}></circle>
          <circle cx="450" cy="820" r="5" class=${lights1}></circle>
          <circle cx="400" cy="840" r="5" class=${lights2}></circle>
          <circle cx="350" cy="850" r="5" class=${lights1}></circle>
          <circle cx="300" cy="860" r="5" class=${lights1}></circle>
          <circle cx="250" cy="880" r="5" class=${lights2}></circle>
          <circle cx="200" cy="900" r="5" class=${lights1}></circle>
          <circle cx="150" cy="880" r="5" class=${lights2}></circle>
          <circle cx="120" cy="850" r="5" class=${lights1}></circle>
          <circle cx="100" cy="820" r="5" class=${lights1}></circle>
          <circle cx="70" cy="800" r="5" class=${lights2}></circle>
          <circle cx="30" cy="790" r="5" class=${lights1}></circle>
          <circle cx="20" cy="750" r="5" class=${lights2}></circle>
          <circle cx="30" cy="650" r="5" class=${lights1}></circle>
          <circle cx="60" cy="600" r="5" class=${lights2}></circle>
          <circle cx="120" cy="550" r="5" class=${lights1}></circle>
          <circle cx="170" cy="500" r="5" class=${lights2}></circle>
          <circle cx="200" cy="450" r="5" class=${lights1}></circle>
          <circle cx="250" cy="500" r="5" class=${lights2}></circle>
          <circle cx="300" cy="400" r="5" class=${lights1}></circle>
          <circle cx="350" cy="350" r="5" class=${lights1}></circle>
     
          
         

 `
}



// <circle cx="135" cy="45" r="5" class=${lights1}></circle>
// <circle cx="165" cy="25" r="5" class=${lights2}></circle>
// <circle cx="195" cy="5" r="5" class=${lights1}></circle>
// <circle cx="235" cy="5" r="5" class=${lights2}></circle>
// <circle cx="265" cy="25" r="5" class=${lights1}></circle>