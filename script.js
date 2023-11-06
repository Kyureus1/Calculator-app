let keys = [];
let percentage
const keyboard = document.getElementById("keys");
let numberButtons = document.getElementsByClassName("number");
let operatorButtons = document.getElementsByClassName("operator");
let functionButtons = document.getElementsByClassName("function");
const screenText = document.getElementById("input");
const screenInt = document.getElementById("data");
const newData = document.createElement("h2");
const cont = document.getElementsByClassName("screenTxt")
var slider = document.getElementById("slider-input");
const body = document.body;
const panel = document.getElementById("panel");
const upperText = document.getElementsByClassName("upper-text");

class key {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

let key1 = new key("1", "key1");
let key2 = new key("2", "key2");
let key3 = new key("3", "key3");
let key4 = new key("4", "key4");
let key5 = new key("5", "key5");
let key6 = new key("6", "key6");
let key7 = new key("7", "key7");
let key8 = new key("8", "key8");
let key9 = new key("9", "key9");
let key0 = new key("0", "key0");
let keyDel = new key("DEL", "keyDel");
let keyEq = new key("=", "keyEq");
let keyRes = new key("RESET", "keyRes");
let keyDec = new key(".", "keyDec");
let keyAdd = new key("+", "keyAdd");
let keySub = new key("-", "keySub");
let keyMult = new key("x", "keyMult");
let keyDiv = new key("/", "keyDiv");

keys.push(key7);
keys.push(key8);
keys.push(key9);
keys.push(keyDel);
keys.push(key4);
keys.push(key5);
keys.push(key6);
keys.push(keyAdd);
keys.push(key1);
keys.push(key2);
keys.push(key3);
keys.push(keySub);
keys.push(keyDec);
keys.push(key0);
keys.push(keyDiv);
keys.push(keyMult);
keys.push(keyRes);
keys.push(keyEq);

keys.forEach(key => {

    if(Number(key.name) >= 0 && Number(key.name) <= 9) {
        let keyInject = `<button id="${key.id}" class="number">${key.name}</button>`;
        keyboard.innerHTML += keyInject;
    }
    else if(key.name === "+" || key.name === "/" || key.name === "x" || key.name === "-" || key.name ===".") {
        let keyInject = `<button id="${key.id}" class="operator">${key.name}</button>`;
        keyboard.innerHTML += keyInject;
    }
    else {
        let keyInject = `<button id="${key.id}" class="function">${key.name}</button>`;
        keyboard.innerHTML += keyInject;
    }
});

numberButtons = Array.from(numberButtons);
operatorButtons = Array.from(operatorButtons);
functionButtons = Array.from(functionButtons);

function numberKeyUp() {
    this.style.transform = "none";
    calcValue();
}

function numberKeyDown() {   
    if(screenText.innerText === "Syntax Error") {
        let enButton = document.getElementById("keyDel");
        enButton.disabled = false;
        enButton.style.opacity = 1;
        screenText.innerText = "";
        if(this.id === "keyMult") {
            screenText.innerText += "*";
            this.style.transform = "translateY(3px)";
            this.style.boxShadow = "none";
        }
        else {
            screenText.innerText += this.innerText;
            this.style.transform = "translateY(3px)";
            this.style.boxShadow = "none";
        }
    }
    else {
        if(this.id === "keyMult") {
            screenText.innerText += "*";
            this.style.transform = "translateY(3px)";
            this.style.boxShadow = "none";
        }
        else {
            screenText.innerHTML += this.innerText;
            this.style.transform = "translateY(3px)";
            this.style.boxShadow = "none";
        }
    }
}

function equalsUp() {
    this.style.transform = "none";
    calcValue();
    let operation = screenText.innerText;
    try {
        if(screenText.innerText != "")
        {
            let result = eval(operation);
            screenText.innerText = result;
        }
    } catch(e) {
        screenText.innerText = "Syntax Error";
        let disButton = document.getElementById("keyDel");
        disButton.disabled = true;
        disButton.style.opacity = 0.5;
    }
}
function equalsDown() {
    this.style.transform = "translateY(3px)";
    this.style.boxShadow = "none";
}

function delUp() {
    this.style.transform = "none";
    calcValue();
    let text = screenText.innerText;
    text = text.substring(0, text.length - 1);
    screenText.innerText = text;
}
function delDown() {
    this.style.transform = "translateY(3px)";
    this.style.boxShadow = "none";
}

function resetUp() {
    this.style.transform = "none";
    calcValue();
}
function resetDown() {
    let enButton = document.getElementById("keyDel");
    enButton.disabled = false;
    enButton.style.opacity = 1;
    this.style.transform = "translateY(3px)";
    this.style.boxShadow = "none";
    //i don't want to delete the labels inside the screen div, just to clear their content. 
    screenText.innerText = "";
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("mouseup", numberKeyUp);
    numberButton.addEventListener("mousedown", numberKeyDown);
});

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("mouseup", numberKeyUp);
    operatorButton.addEventListener("mousedown", numberKeyDown);
});

let del = functionButtons[0];
let res = functionButtons[1];
let eq = functionButtons[2];

eq.addEventListener("mouseup", equalsUp);
eq.addEventListener("mousedown", equalsDown);

del.addEventListener("mouseup", delUp);
del.addEventListener("mousedown", delDown);

res.addEventListener("mouseup", resetUp);
res.addEventListener("mousedown", resetDown);

function theme() {
    i = 0;
    for(i = 0; i<upperText.length; i++) {
        upperText[i].style.color = "hsl(0, 0%, 100%)";
    }
    for(i = 0; i<numberButtons.length; i++) {
        numberButtons[i].style.backgroundColor = "hsl(30, 25%, 89%)"
        numberButtons[i].style.boxShadow = "0 3px hsl(28, 16%, 65%)";
        numberButtons[i].style.color = "hsl(221, 14%, 31%)";
    }
    for(i = 0; i<operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        operatorButtons[i].style.boxShadow = "0 3px hsl(28, 16%, 65%)";
        operatorButtons[i].style.color = "hsl(221, 14%, 31%)";
    }
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    panel.style.backgroundColor = "hsl(222, 26%, 31%)";
    screenInt.style.backgroundColor = "hsl(224, 36%, 15%)";
    screenText.style.color = "hsl(0, 0%, 100%)";
    keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
    del.style.backgroundColor = "hsl(225, 21%, 49%)";
    del.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    del.style.color = "hsl(0, 0%, 100%)";
    res.style.backgroundColor = "hsl(225, 21%, 49%)";
    res.style.boxShadow = "0 3px hsl(224, 28%, 35%)";
    res.style.color = "hsl(0, 0%, 100%)";
    eq.style.backgroundColor = "hsl(6, 63%, 50%)";
    eq.style.boxShadow = "0 3px hsl(6, 70%, 34%)";
    eq.style.color = "hsl(0, 0%, 100%)";
    slider.style.setProperty('--trackbackg', 'hsl(223, 31%, 20%)');
    slider.style.setProperty('--thumbbackg', 'hsl(6, 63%, 50%)');
}

function theme2() {
    i = 0;
    for(i = 0; i<upperText.length; i++) {
        upperText[i].style.color = "hsl(60, 10%, 19%)";
    }
    for(i = 0; i<numberButtons.length; i++) {
        numberButtons[i].style.backgroundColor = "hsl(45, 7%, 89%)"
        numberButtons[i].style.boxShadow = "0 3px hsl(35, 11%, 61%)";
        numberButtons[i].style.color = "hsl(60, 10%, 19%)";
    }
    for(i = 0; i<operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        operatorButtons[i].style.boxShadow = "0 3px hsl(35, 11%, 61%)";
        operatorButtons[i].style.color = "hsl(60, 10%, 19%)";
    }
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    panel.style.backgroundColor = "hsl(0, 0%, 90%)";
    screenInt.style.backgroundColor = "hsl(0, 0%, 93%)";
    screenText.style.color = "hsl(60, 10%, 19%)";
    keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
    del.style.backgroundColor = "hsl(185, 42%, 37%)";
    del.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    res.style.backgroundColor = "hsl(185, 42%, 37%)";
    res.style.boxShadow = "0 3px hsl(185, 58%, 25%)";
    eq.style.backgroundColor = "hsl(25, 98%, 40%)";
    eq.style.boxShadow = "0 3px hsl(25, 99%, 27%)";
    slider.style.setProperty('--trackbackg', 'hsl(0, 5%, 81%)');
    slider.style.setProperty('--thumbbackg', 'hsl(25, 98%, 40%)');
}

function theme3() {
    i = 0;
    for(i = 0; i<upperText.length; i++) {
        upperText[i].style.color = "hsl(52, 100%, 62%)";
    }
    for(i = 0; i<numberButtons.length; i++) {
        numberButtons[i].style.backgroundColor = "hsl(281, 89%, 26%)"
        numberButtons[i].style.boxShadow = "0 3px hsl(285, 91%, 52%)";
        numberButtons[i].style.color = "hsl(52, 100%, 62%)";
    }
    for(i = 0; i<operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = "hsl(281, 89%, 26%)";
        operatorButtons[i].style.boxShadow = "0 3px hsl(285, 91%, 52%)";
        operatorButtons[i].style.color = "hsl(52, 100%, 62%)";
    }
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    panel.style.backgroundColor = "hsl(268, 75%, 9%)";
    screenInt.style.backgroundColor = "hsl(268, 71%, 12%)";
    screenText.style.color = "hsl(52, 100%, 62%)";
    keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
    del.style.backgroundColor = "hsl(268, 47%, 21%)";
    del.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    res.style.backgroundColor = "hsl(268, 47%, 21%)";
    res.style.boxShadow = "0 3px hsl(290, 70%, 36%)";
    eq.style.backgroundColor = "hsl(176, 100%, 44%)";
    eq.style.boxShadow = "0 3px hsl(177, 92%, 70%)";
    eq.style.color = "hsl(198, 20%, 13%)";
    slider.style.setProperty('--trackbackg', 'hsl(268, 71%, 12%)');
    slider.style.setProperty('--thumbbackg', 'hsl(176, 100%, 44%)');
}

function calcValue() {
    let aux = slider.valueAsNumber;
    if(aux === 1) {
        theme();
    }
    else if(aux === 2) {
        theme2();
    }
    else if(aux === 3) {
        theme3();
    }
}

calcValue();

slider.addEventListener("input", calcValue);