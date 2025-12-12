import { morseCodeMappings } from "./codeMappings.js";

export const engToMorse = (english) => {
    if(!english || typeof english !== "string") {
        return "";

    }

    const cleaned = english.toUpperCase().trim();

    if (cleaned === "") {
        return "";
    }

    const engWords = cleaned.split(/\s+/);

    const morseWords = engWords.map ((word) => {
        const engLetters = word.split("");
        const morseLetters = engLetters.map((letter)=>morseCodeMappings[letter]).filter(Boolean);
        return morseLetters.join(" "); 
        

    });
    return morseWords.join(" / ");

   
} ;