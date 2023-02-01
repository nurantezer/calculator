const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container")

//?Butonlari taşıyan container icin event tanımlaması
btnContainer.addEventListener("click", (e) =>{
//  console.log(e.target);
if(e.target.classList.contains("num")){     //*classlist içinde num diye bir class var mı
// console.log(e.target.textContent);
appendNumber(e.target.textContent);
updateDisplay();
}  
})

const appendNumber = (num) => {
// console.log(num);

};

const updateDisplay = () => {
    
}