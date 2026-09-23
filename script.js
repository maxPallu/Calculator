const add = document.querySelector(".add");
add.addEventListener("click", () => {
    let num1 = prompt("What's your first number?");
    let num2 = prompt("What's your second number?");

    let result = addNumbers(num1, num2);

    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerText = num1+ " + "+ num2 + " = " + result;

    container.appendChild(div);
});

function addNumbers(num1, num2) {
    return +num1 + +num2;
}