window.addEventListener("keydown", function() {
    if(screenText.innerText === "Syntax Error") {
        let enButton = document.getElementById("keyDel");
        enButton.disabled = false;
        enButton.style.opacity = 1;
        screenText.innerText = "";
        screenText.innerText += event.key;
    }
    else {
        screenText.innerText += event.key;
    }
});