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
  #err;

  textToBin() {
    this.#input = document.getElementById("text-to-bin").value;
    this.#output = document.getElementById("output-bin");

    this.#output.innerHTML = null;
    for (let i = 0; i < this.#input.length; i++) {
      this.#output.innerHTML += this.#input[i].charCodeAt(0).toString(2) + " ";
    }
  }

  binToText() {
    this.#input = document.getElementById("bin-to-text").value;
    this.#output = document.getElementById("output-text");
    this.#err = /[a-z2-9,=*_&^%$#@!<>'"`~]/i;

    if (this.#err.test(this.#input))
      this.#output.innerHTML =
        "<b>Cannot use normal text, numbers from 2-9, or characters in the binary translator</b>";
    else if (this.#err.test(this.#input) === false) {
      const inputArr = this.#input.split(" ");
      this.#output.innerHTML = null;
      for (let i = 0; i < inputArr.length; i++) {
        const decimal = parseInt(inputArr[i], 2);
        this.#output.innerHTML += String.fromCharCode(decimal);
      }
    }
  }

  textToMorse() {
    this.#input = document.getElementById("text-to-morse").value;
    this.#output = document.getElementById("output-morse");
    this.#err = /[,=*_&^%$#@!<>'"`~]/i;

    if (this.#err.test(this.#input))
      this.#output.innerHTML =
        "<b>Cannot input any characters when trying to translate to morse code. They're not compatible!</b>";
    else if (this.#err.test(this.#input) === false) {
      const inputMorse = this.#input.toUpperCase();
      this.#output.innerHTML = null;
      const output = this.#encode(inputMorse);
      this.#output.innerHTML += output + " ";
    }
  }

  morseToText() {
    this.#input = document.getElementById("morse-to-text").value;
    this.#output = document.getElementById("output-text--m");
    this.#err = /[a-z0-9,=*_&^%$#@!<>'"`~/]/i;

    if (this.#err.test(this.#input))
      this.#output.innerHTML =
        "<b>Cannot input any letters, numbers, or characters when trying to translate from morse code.</b>";
    else if (this.#err.test(this.#input) === false) {
      const inputEn = this.#input.split(" ");
      this.#output.innerHTML = null;
      const output = this.#decode(inputEn);
      this.#output.innerHTML += output;
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

  #encode(text) {
    let cipher = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") cipher += this.#MORSE_CODE_DICT[text[i]] + " ";
      else cipher += " ";
    }
    return cipher;
  }
  #decode(text) {
    let decipher = "";
    for (const input of text) {
      const letters = input.split(" ");
      let citext = "";
      for (const letter of letters) {
        for (const key in this.#MORSE_CODE_DICT) {
          if (this.#MORSE_CODE_DICT[key] === letter) citext += key;
        }
      }
      decipher += citext + " ";
    }
    return decipher;
  }
}

const translator = new Translator();
