const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("translate-button");
const shkarko = document.getElementById("shkarko");

const shqip = document.getElementById("shqip");
const turqisht = document.getElementById("turqisht");
const romanisht = document.getElementById("romanisht");
////////////////////////////////////////////////////////////////////////
const turkishletter = [
  "a",
  "b",
  "c",
  "ç",
  "d",
  "e",
  "f",
  "g",
  "ğ",
  "h",
  "ı",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ö",
  "p",
  "r",
  "s",
  "ş",
  "t",
  "u",
  "ü",
  "v",
  "y",
  "z",
  ",",
  ";",
  ":",
  "/",
  "–",
  "%",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const turkishbraille = [
  "⠁", //a
  "⠃", //b
  "⠉", //c
  "⠡", // ç
  "⠙", //d
  "⠑", //e
  "⠋", //f
  "⠛", //g
  "⠣", // ğ
  "⠓", //h
  "⠔", // ı
  "⠊", //i
  "⠚", //j
  "⠅", //k
  "⠇", // l
  "⠍", // m
  "⠝", // n
  "⠕", // o
  "⠪", // ö
  "⠏", //p
  "⠗", //r
  "⠎", //s
  "⠩", // ş
  "⠞", //t
  "⠥", //u
  "⠳", // ü
  "⠧", // v
  "⠽", // y
  "⠵", // z
  "⠂", // ,
  "⠆", // ;
  "⠒", // :
  "⠌", // /
  "⠤", // -
  "⠴⠚", // %
  "⠁", //1
  "⠃", //2
  "⠉", //3
  "⠙", //4
  "⠑", //5
  "⠋", //6
  "⠛", //7
  "⠓", //8
  "⠊", //9
  "⠚", //0
];

////////////////////////////////////////////////////////////////////////

romanianletters = [
  "a",
  "ã",
  "â",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "î",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "ş",
  "t",
  "ţ",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ",",
  ";",
  ":",
  "(…)",
  "/",
  "–",
  "%",
  "‰",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

romanianbraille = [
  "⠁",
  "⠡",
  "⠣",
  "⠃",
  "⠉",
  "⠙",
  "⠑",
  "⠋",
  "⠛",
  "⠓",
  "⠊",
  "⠩",
  "⠚",
  "⠅",
  "⠇",
  "⠍",
  "⠝",
  "⠕",
  "⠏",
  "⠟",
  "⠗",
  "⠱",
  "⠞",
  "⠪",
  "⠥",
  "⠧",
  "⠺",
  "⠭",
  "⠽",
  "⠵",
  "⠂",
  "⠆",
  "⠒",
  "⠶…⠶",
  "⠌",
  "⠤",
  "⠴⠚",
  "⠴⠴",
  "⠼⠁",
  "⠼⠃",
  "⠼⠉",
  "⠼⠙",
  "⠼⠑",
  "⠼⠋",
  "⠼⠛",
  "⠼⠓",
  "⠼⠊",
  "⠼⠚",
];

function translateTurkishToBraille() {
  const inputi = input.value;
  const splitetarray = inputi.split();

  splitetarray.forEach((element) => {
    let rezultati = "";
    for (i = 0; i < element.length; i++) {
      if (element.value == undefined) {
        rezultati += " ";
      }

      for (j = 0; j < turkishletter.length; j++) {
        if (element.charAt(i) == turkishletter[j]) {
          rezultati += turkishbraille[j];
        }
      }
    }
    output.innerHTML = `${rezultati}`;
  });
}

const albanianLetters = {
  a: "⠁",
  b: "⠃",
  c: "⠉",
  ç: "⠙",
  d: "⠑",
  dh: "⠙⠑",
  e: "⠊",
  ë: "⠫",
  f: "⠋",
  g: "⠛",
  gj: "⠛⠋",
  h: "⠓",
  i: "⠊",
  j: "⠚",
  k: "⠅",
  l: "⠇",
  ll: "⠇⠇",
  m: "⠍",
  n: "⠝",
  nj: "⠝⠊",
  o: "⠕",
  p: "⠏",
  q: "⠟",
  r: "⠗",
  rr: "⠗⠗",
  s: "⠎",
  sh: "⠬",
  t: "⠥",
  th: "⠞",
  u: "⠥⠗",
  v: "⠧",
  x: "⠽",
  xh: "⠵",
  y: "⠺",
  z: "⠭",
  zh: "⠵⠓",
  0: "⠴",
  1: "⠂",
  2: "⠆",
  3: "⠒",
  4: "⠲",
  5: "⠢",
  6: "⠖",
  7: "⠶",
  8: "⠦",
  9: "⠔",
  "?": "⠢⠦",
  "!": "⠖⠂",
  "=": "⠐⠒",
  ",": "⠂",
  // Add more characters and their Braille representations here
};

function translateAlbanianToBraille(text) {
  let braille = "";
  let i = 0;
  while (i < text.length) {
    let currentChar = text[i];
    let nextChar = text[i + 1];
    let currentBraille = albanianLetters[currentChar.toLowerCase()];

    // Check for double letters
    if (
      nextChar &&
      albanianLetters[currentChar.toLowerCase() + nextChar.toLowerCase()]
    ) {
      currentBraille =
        albanianLetters[currentChar.toLowerCase() + nextChar.toLowerCase()];
      i++; // Skip the next character in the loop
    }

    if (currentBraille) {
      braille += currentBraille;
    } else {
      braille += currentChar; // Preserve characters that don't have Braille representations
    }

    i++;
  }

  return braille;
}

input.addEventListener("input", () => {
  const perkthimi = translateAlbanianToBraille(input.value);
  output.textContent = perkthimi;
});

shqip.addEventListener("click", () => {
  romanisht.style.backgroundColor = "white";
  shqip.style.backgroundColor = "#708ec9";
  turqisht.style.backgroundColor = "white";
  // //////////////////////////////////////
  const perkthimi = translateAlbanianToBraille(input.value);
  output.textContent = perkthimi;
  input.addEventListener("input", () => {
    const perkthimi = translateAlbanianToBraille(input.value);
    output.textContent = perkthimi;
  });
});

turqisht.addEventListener("click", () => {
  romanisht.style.backgroundColor = "white";
  shqip.style.backgroundColor = "white";
  turqisht.style.backgroundColor = "#708ec9";
  input.addEventListener("input", translateTurkishToBraille);
  output.innerHTML = "";
});

romanisht.addEventListener("click", () => {
  romanisht.style.backgroundColor = "#708ec9";
  shqip.style.backgroundColor = "white";
  turqisht.style.backgroundColor = "white";

  input.addEventListener("input", translateRomanianToBraille);
  output.innerHTML = "";
});

window.onload = function () {
  document.getElementById("shkarko").addEventListener("click", () => {
    const pdf = this.document.getElementById("output");
    console.log(pdf);
    console.log(window);
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(pdf).set(opt).save();
  });
};
