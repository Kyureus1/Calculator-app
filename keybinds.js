window.addEventListener("keydown", function() {
    if (event.which >= 48 && event.which <= 57) {
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
    }
});