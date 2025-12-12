import   { engToMorse } from "./src/engToMorse.js";
import   { morseToEng } from "./src/morseToEng.js";

// DOM Elements

const modeSelection = document.querySelectorAll("input[name='mode']");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const translateBtn = document.querySelector("#translateBtn");
const clearBtn = document.querySelector("#clearBtn");
const message = document.querySelector("#message");
const note =document.querySelector("#note");



const showMessage = (text) => {
    message.textContent = text;
};

// get default selected mode

const selectedMode = () => {
    for (const radio of modeSelection) {
        if(radio.checked) return radio.value;
    }
    return "eng-to-morse";
};

// Updates message at the bottom about spaces in both texts.

const updateNote = () => {
    const mode = selectedMode();
    if (mode === "eng-to-morse") {
        note.innerHTML = 'Note: For English → Morse. Letters are separated by spaces, words by <code>/</code>.';
    }

    else {
        note.innerHTML = 'Note: For Morse → English. Example: <code>.... . .-.. .-.. --- / .-- --- .-. .-.. -..</code>';
    }
};

//Reset text areas when mode changes (radio event)

modeSelection.forEach((radio) => {
radio.addEventListener("change", () => {

    inputText.value = "";
    outputText.value = "";
    showMessage("");
    updateNote();
});
});

//Translate event

translateBtn.addEventListener("click", ()=> {
    const text = inputText.value;

    if(!text.trim()) {
        showMessage("Please enter some text to translate");
        return;
    }

    const mode= selectedMode();

    let result = "";
    if (mode === "eng-to-morse") {
        result = engToMorse(text);
    }

    else {
        result = morseToEng(text);
    }

    if(!result) {
        showMessage("Could not translate this input. Please check the format");
        outputText.value="";
        return;
    }

    outputText.value = result;
    showMessage(mode === "eng-to-morse" ? "Translated English -> Morse" : "Translated Morse -> English")

});

//clear event

clearBtn.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
  showMessage("");      
});

updateNote();