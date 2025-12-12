export const morseCodeMappings = {

  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V:"...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

};

export const reverseMorseCodeMappings = Object.fromEntries(Object.entries(morseCodeMappings).map(([letter, morse]) => [morse, letter]));
//console.log(reverseMorseCodeMapings);