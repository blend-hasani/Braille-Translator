const input = document.getElementById("input");
const output = document.getElementById("output");
const btn = document.getElementById("translate-button");

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
/////////////////////////////////////////////////////////////////////////
const albanianletters = [
  "a",
  "b",
  "c",
  "ç",
  "d",
  "dh",
  "e",
  "ë",
  "f",
  "g",
  "gj",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ll",
  "m",
  "n",
  "nj",
  "o",
  "p",
  "q",
  "r",
  "rr",
  "s",
  "sh",
  "t",
  "th",
  "u",
  "v",
  "x",
  "xh",
  "y",
  "z",
  "zh",
];

const albanianbraille = [
  "⠁",
  "⠃",
  "⠉",
  "⠩",
  "⠙",
  "⠹",
  "⠑",
  "⠡",
  "⠋",
  "⠛",
  "⠻",
  "⠓",
  "⠊",
  "⠚",
  "⠅",
  "⠇",
  "⠷",
  "⠍",
  "⠝",
  "⠫",
  "⠕",
  "⠏",
  "⠟",
  "⠗",
  "⠯",
  "⠎",
  "⠱",
  "⠞",
  "⠾",
  "⠥",
  "⠧",
  "⠭",
  "⠮",
  "⠽",
  "⠵",
  "⠳",
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

function translateAlbanianToBraille() {
  const inputi = input.value;
  const splitetarray = inputi.split();

  splitetarray.forEach((element) => {
    let rezultati = "";
    for (i = 0; i < element.length; i++) {
      if (element.value == undefined) {
        rezultati += " ";
      }

      for (j = 0; j < albanianletters.length; j++) {
        if (element.charAt(i) == albanianletters[j]) {
          rezultati += albanianbraille[j];
        }
      }
    }
    output.innerHTML = `${rezultati}`;
  });
}

function translateRomanianToBraille() {
  const inputi = input.value;
  const splitetarray = inputi.split();

  splitetarray.forEach((element) => {
    let rezultati = "";
    for (i = 0; i < element.length; i++) {
      if (element.value == undefined) {
        rezultati += " ";
      }

      for (j = 0; j < romanianletters.length; j++) {
        if (element.charAt(i) == romanianletters[j]) {
          rezultati += romanianbraille[j];
        }
      }
    }
    output.innerHTML = `${rezultati}`;
  });
}
input.addEventListener("input", translateAlbanianToBraille);

shqip.addEventListener("click", () => {
  input.addEventListener("input", translateAlbanianToBraille);
  output.innerHTML = "";
});

turqisht.addEventListener("click", () => {
  input.addEventListener("input", translateTurkishToBraille);
  output.innerHTML = "";
});

romanisht.addEventListener("click", () => {
  input.addEventListener("input", translateRomanianToBraille);
  output.innerHTML = "";
});
