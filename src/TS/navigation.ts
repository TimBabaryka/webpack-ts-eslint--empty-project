const settings = document.querySelector('.settings') as HTMLInputElement;
const main = document.querySelector('.mainBody') as HTMLInputElement;
const toys = document.querySelector('.toys') as HTMLInputElement;

const dressBox = document.querySelector('.dressBox') as HTMLInputElement;

export function settingPage():void {
  document.querySelector('.backToMain')?.addEventListener('click', () => {
    main.style.display = 'grid';
    settings.style.display = 'none';
  });
} // from main to settings

export function mainPage():void {
  document.querySelector('.fromMain')?.addEventListener('click', () => {
    main.style.display = 'none';
    settings.style.display = 'grid';
    toys.style.pointerEvents = 'none';
    toys.style.color = '#24C5DB';
  });
} // from main to settings

// export function toDress() {
//     document.querySelector('.dressTreePage')?.addEventListener("click",()=> {
//     dressBox.style.display="grid";
//     settings.style.display="none"
//     console.log(22)
//     })
// } //from setting to main|| settings
