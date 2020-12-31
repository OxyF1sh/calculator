const displ = document.querySelector("#inner-displ");

const clear = document.querySelector("#clear");

const digits = document.querySelectorAll(".number");

const equals = document.querySelector("#equals");

const result = document.querySelector("#result")

const hidden = document.querySelector("#hidden-displ")

let currentOperator = "";
let leftSide = 0;
let rightSide = 0;
const operators = document.querySelectorAll(".operator")
function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}


function multiply (a, b) {
	return a*b;
}

function divide (a, b) {
	if(b === 0){
		return "nice try :)"

	}
	return (Math.round(a/b * 100) / 100);
}

function operate (currentOperator, leftSide, rightSide) {
	switch(currentOperator){
        case '+':
            return add(leftSide, rightSide);
            break;
        case '-':
            return subtract(leftSide, rightSide);
            break;
        case '*':
            return multiply(leftSide, rightSide);
            break;
        case '/':
            return divide(leftSide, rightSide);
			break;
	}
}

digits.forEach( digit => {
	digit.addEventListener("click", () => {
		hidden.textContent = hidden.textContent + digit.textContent;
		displ.textContent = displ.textContent + digit.textContent;
	});
});

operators.forEach( operator => {
	operator.addEventListener("click", () => {
		if (currentOperator !== ""){
			rightSide = hidden.textContent;
			leftSide = operate(currentOperator, Math.round(leftSide * 100) / 100, Math.round(hidden.textContent * 100) / 100);
			currentOperator = operator.textContent;
			hidden.textContent = "";
			displ.textContent = leftSide + " " + currentOperator + " ";
			
		}
		else{
			hidden.textContent = "";
			leftSide = displ.textContent;
			currentOperator = operator.textContent;
			displ.textContent = displ.textContent + " " + operator.textContent + " ";
		}
		
	});
});

clear.addEventListener("click", clearText);

equals.addEventListener("click", ()  =>{
	result.textContent = operate(currentOperator, Math.round(leftSide * 100) / 100, Math.round(hidden.textContent * 100) / 100);
	displ.textContent = result.textContent;
});

function clearText(){
	displ.textContent = ""; 
	hidden.textContent = "";
	leftSide = 0;
	rightSide = 0;
	currentOperator = "";
	result.textContent = "";
}