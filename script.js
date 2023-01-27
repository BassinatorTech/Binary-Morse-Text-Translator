"use strict";

// THEME
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

// TRANSLATOR
class Translator {
  #input;
  #output;

  textToBin() {
    this.#input = document.getElementById("text-to-bin").value;
    this.#output = document.getElementById("output-bin");

    this.#output.innerHTML = "";
    for (let i = 0; i < this.#input.length; i++) {
      this.#output.innerHTML += this.#input[i].charCodeAt(0).toString(2) + " ";
    }
  }

  binToText() {
    this.#input = document.getElementById("bin-to-text").value;
    this.#output = document.getElementById("output-text");

    const inputArr = this.#input.split(" ");
    this.#output.innerHTML = "";
    for (let i = 0; i < inputArr.length; i++) {
      const decimal = parseInt(inputArr[i], 2);
      this.#output.innerHTML += String.fromCharCode(decimal);
    }
  }

  textToMorse() {
    this.#input = document.getElementById("text-to-morse").value;
    this.#output = document.getElementById("output-morse");

    const inputMorse = this.#input.toUpperCase();
    this.#output.innerHTML = "";
    for (let i = 0; i < inputMorse.length; i++) {
      if (inputMorse[i] === " ") this.#output.innerHTML += " ";

      this.#output.innerHTML += this.#MORSE_CODE_DICT[inputMorse[i]] + " ";
    }
  }

  morseToText() {
    this.#input = document.getElementById("morse-to-text").value;
    this.#output = document.getElementById("output-text--m");

    const inputMorse = this.#input.split("   ");
    this.#output.innerHTML = "";
    for (let i = 0; i < inputMorse.length; i++) {
      const morseInput = inputMorse[i].split(" ");

      for (let j = 0; j < morseInput.length; j++) {
        this.#output.innerHTML += this.#MORSE_CODE_REVERSED[morseInput[j]];
      }
      this.#output.innerHTML += " ";
    }
  }

  #MORSE_CODE_DICT = {
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

  #MORSE_CODE_REVERSED = {
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
}
const translator = new Translator();
