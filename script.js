let num1;
let num2;
let operator;
let isOperatorOn;


const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    createText("0");
    if(isOperatorOn === 1) {
        num2 = 0;
    } else {
        num1 = 0;
    }
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    createText("1");
    if(isOperatorOn === 1) {
        num2 = 1;
    } else {
        num1 = 1;
    }
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    createText("2");
    if(isOperatorOn === 1) {
        num2 = 2;
    } else {
        num1 = 2;
    }
});

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    createText("3");
    if(isOperatorOn === 1) {
        num2 = 3;
    } else {
        num1 = 3;
    }
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    createText("4");
    if(isOperatorOn === 1) {
        num2 = 4;
    } else {
        num1 = 4;
    }
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    createText("5");
    if(isOperatorOn === 1) {
        num2 = 5;
    } else {
        num1 = 5;
    }
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    createText("6");
    if(isOperatorOn === 1) {
        num2 = 6;
    } else {
        num1 = 6;
    }
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    createText("7");
    if(isOperatorOn === 1) {
        num2 = 7;
    } else {
        num1 = 7;
    }
});

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    createText("8");
    if(isOperatorOn === 1) {
        num2 = 8;
    } else {
        num1 = 8;
    }
});

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    createText("9");
    if(isOperatorOn === 1) {
        num2 = 9;
    } else {
        num1 = 9;
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearText();
    num1 = 0;
    num2 = 0;
    operator = 0;
    isOperatorOn = 0;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    operator = "+";
    isOperatorOn = 1;
    createText(" + ");
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    operator= "-";
    isOperatorOn = 1;
    createText(" - ");
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    operate(operator, num1, num2);
    isOperatorOn = 0;
});

function operate(operator, num1, num2) {
    if(operator === "+") {
        let result = addNumbers(num1, num2);
        clearText();
        createText(num1 + " + " +num2+ " = "+result);
    } else if (operator === "-") {
        let result = substractNumbers(num1, num2);
        clearText();
        createText(num1 + " - " +num2+ " = "+result);
    }
}

function createText(text) {
    const div = document.createElement("div");
    div.classList.add("screenDiv");
    div.innerText = text;
    
    const screen = document.querySelector(".screen");
    screen.appendChild(div);
}

function addNumbers(num1, num2) {
    return +num1 + +num2;
} 

function substractNumbers(num1, num2) {
    return +num1 - +num2;
}

function clearText() {
    const div = document.querySelector(".screen");
    for(let i = 0; i<3; i++) {
        div.removeChild(document.querySelector(".screenDiv"));
    }
    
}