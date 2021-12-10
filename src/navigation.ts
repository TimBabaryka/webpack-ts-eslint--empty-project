

function mainPage() {
    document.querySelector('.fromMain')?.addEventListener("click",() => {
     const main = document.querySelector(".mainBody")as HTMLInputElement;
     const settings = document.querySelector(".settings") as HTMLInputElement;
     main.style.display="none";
     settings.style.display="grid"
    } )
}

export default mainPage