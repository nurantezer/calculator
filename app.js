const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container")

let currOperand = ""        //*ilk girilen curent
let previousOperand = ""    

//?Butonlari taşıyan container icin event tanımlaması
btnContainer.addEventListener("click", (e) =>{
//  console.log(e.target);
if(e.target.classList.contains("num")){     //*classlist içinde num diye bir class var mı
// console.log(e.target.textContent);
appendNumber(e.target.textContent);
updateDisplay();
}  
})

const appendNumber = (num) => {      //*alma
//? Eğer ilk olarak 0 girilmişse geri dön
if (!currOperand  && num ==='0') return;  //*burada bu koşul gerçeklesirse return et diyoruz yani anlamı
//* burada kes ana programa dön başta 0(sfır girmesini engelledik)

//*? Eğer şu anki sayı . ise ve önceki girilen sayi  . içeriyorsa geri dön
if(num === '.' && currOperand.includes('.')) return;

//?Girilen sayıları birleştir
currOperand += num;

};

const updateDisplay = () => {      //*gösterme
    currDisp.textContent = currOperand
}