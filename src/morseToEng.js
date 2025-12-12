import { reverseMorseCodeMappings } from "./codeMappings.js";

export const morseToEng = (morseText) => {

    if(!morseText || typeof morseText !== "string") {
        return "";
    }

    const cleaned = morseText.trim();
    if (cleaned === "") {
        return "";
    }

    const morseWords = cleaned.split(/\s*\/\s*/);

    const englishWords = morseWords.map((morseWord) => {

        const morseLetters = morseWord.trim().split(/\s+/);

        const englishLetters = morseLetters.map((morseLetter) => reverseMorseCodeMappings[morseLetter]).filter(Boolean);

        return englishLetters.join("");

    });

    return englishWords.join(" ");
};

