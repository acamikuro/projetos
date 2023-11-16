const display = document.querySelector(".display");
const controlButtons = document.querySelector(".controls").children;
const allSymbols = ["+", "-", "÷", "X", "C", "=", "%"];
const operators = ['+', '-', 'X', '÷', '%'];

let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";
let hist = '';

const operators1 = (array) => {
  return array.toSpliced(-2,1) 
}

const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);
  console.log("primeiro" + firstValue)
  console.log("segundo" +secondValue)
  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "X") result = firstValue * secondValue;
  if (symbol === "÷") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;

  display.innerText = result;
  firstValue = result.toString();
  secondValue = "0";
};

for (let button of controlButtons) {
  button.addEventListener("click", (e) => {
    const { innerText: btnValue } = button;
    console.log(e.target.textContent)
    //debugger;
    const btnValueIsSymbol = allSymbols.includes(btnValue);
    hist = display.textContent[display.textContent.length -1]
    //console.log("ta certo", hist) 
    //console.log('display: ', display.textContent)


    if(!Number(hist) && !Number(e.target.textContent) && btnValue != "⌫") {
      display.innerText = display.innerText.substring(0,display.innerText.length-1)+ operators1([...hist]).toString()
    }

    if (!secondValue && btnValue === "=") return null;

    if (btnValue === "C") {
      firstValue = secondValue = symbol = "";
      return (display.innerText = "");
    }

    if (btnValue === "⌫") { 
        display.innerHTML = display.innerText.slice(0, -1);
       }
       //debugger;
     else if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=" && btnValue !== "⌫") display.innerText += btnValue;
    
  });
}

//if (btnValueIsSymbol && allSymbols.includes( display.innerText.slice(0, -1)) { display.innerText.slice(0, -1) + btnValue }
