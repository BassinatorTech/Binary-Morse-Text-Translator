"use strict";

function textToBin() {
  const input = document.getElementById("text-to-bin").value;
  const output = document.getElementById("output-bin");

  output.innerHTML = "";
  for (let i = 0; i < input.length; i++) {
    output.innerHTML += input[i].charCodeAt(0).toString(2) + " ";
  }
}

function binToText() {
  const input = document.getElementById("bin-to-text").value;
  const output = document.getElementById("output-text");

  const inputArr = input.split(" ");
  output.innerHTML = "";
  for (let i = 0; i < inputArr.length; i++) {
    const decimal = parseInt(inputArr[i], 2);
    output.innerHTML += String.fromCharCode(decimal);
  }
}

function textToMorse() {
  const input = document.getElementById("text-to-morse").value;
  const output = document.getElementById("output-morse");

  const inputMorse = input.toUpperCase();
  output.innerHTML = "";
  for (let i = 0; i < inputMorse.length; i++) {
    if (inputMorse[i] === " ") output.innerHTML += " ";

    output.innerHTML += MORSE_CODE_DICT[inputMorse[i]] + " ";
  }
}

function morseToText() {
  const input = document.getElementById("morse-to-text").value;
  const output = document.getElementById("output-text--m");

  const inputMorse = input.split("   ");
  output.innerHTML = "";
  for (let i = 0; i < inputMorse.length; i++) {
    const morseInput = inputMorse[i].split(" ");

    for (let j = 0; j < morseInput.length; j++) {
      output.innerHTML += MORSE_CODE_REVERSED[morseInput[j]];
    }
    output.innerHTML += " ";
  }
}

const MORSE_CODE_DICT = {
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
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ", ": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  "/": "-..-.",
  "-": "-....-",
  "(": "-.--.",
  ")": "-.--.-",
};

const MORSE_CODE_REVERSED = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "--..--": ", ",
  ".-.-.-": ".",
  "..--..": "?",
  "-..-.": "/",
  "-....-": "-",
  "-.--.": "(",
  "-.--.-": ")",
};

const light = document.getElementById("light");
const dark = document.getElementById("dark");
const theme = localStorage.getItem("theme");
const body = document.body;

if (theme) body.classList.add(theme);

dark.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

light.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};
