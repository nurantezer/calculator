const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container")

let currOperand = ""        //*ilk girilen curent ilk girilen sayılar
let previousOperand = ""    //*yukarıda bir daha div var orda çıkan bu
let operation = ""          //*Bunları işlem yaptırıp ileride displayde yazdırabilmek için globale taşıyorum
//?Butonlari taşıyan container icin event tanımlaması
btnContainer.addEventListener("click", (e) =>{
//  console.log(e.target);
if(e.target.classList.contains("num")){     //*classlist içinde num diye bir class var mı
// console.log(e.target.textContent);
appendNumber(e.target.textContent);
updateDisplay();
}  

if (e.target.classList.contains('operator')){
    chooseOperator(e.target.textContent);
    updateDisplay();
}
})

const appendNumber = (num) => {
  //*alma
  //? Eğer ilk olarak 0 girilmişse geri dön
  if (currOperand === "0" && num === "0") return; //*burada bu koşul gerçeklesirse return et diyoruz yani anlamı
  //* burada kes ana programa dön başta 0(sfır girmesini engelledik)

  //? Eğer ilk olarak 0 girilmisse ve sonrasinda da . haricinde baska
  //? bir sayi girilmis ise sadece girilen yeni sayiyi degiskene aktar.
  //? Orn: 09 => 9 , 03 => 3 , 0.1 => 0.1
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }

  //*? Eğer şu anki sayı . ise ve önceki girilen sayi  . içeriyorsa geri dön
  if (num === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;

  //?Girilen sayıları birleştir
  currOperand += num;
};

const updateDisplay = () => {      //*gösterme ekranda
    currDisp.textContent = currOperand;
    prevDisp.textContent = `${previousOperand} ${operation}`
}

const chooseOperator = (op) => {
  //? ilk sayi girisiinden sonraki islemleri gercekletir
  if (previousOperand) {
    calculate();
  }
  //? Degisken swapiing
  operation = op;
  previousOperand = currOperand;
  currOperand = "";
}

const calculate = () => {
  let calculation = 0;

  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }

  currOperand = calculation;

  //? Esittir butonuna tiklanildiginda ekranda gozukmemesi icin
  //? previousOperand ve operation'ı silmemiz gerekir
  previousOperand = "";
  operation = "";
};