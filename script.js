const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    createText("0");
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    createText("1");
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    addSign("+");
})

function createText(text) {
    const div = document.createElement("div");
    div.innerText = text;
    
    const screen = document.querySelector(".screen");
    screen.appendChild(div);
}

function addSign(sign) {
    const div = document.createElement("div");
    div.innerText = sign;
    const signScreen = document.querySelector(".sign");
    signScreen.appendChild(div);
}