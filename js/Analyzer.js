let textareaEl = document.querySelector("#text");
let text = null;
let data = {
  Words: 0,
  Sentences: 0,
  Uppercase: 0,
  Lowercase: 0,
  Spaces: 0,
  Digits: 0,
  Vowels: 0,
  Consonants: 0,
  SemiVowel:0
};


const findLength = (item) => (item == null ? 0 : item.length);

const analyze = () => {
  text = textareaEl.value;

  //  number of new Sentences   text.match(/\056/g)
  //  number of uppercaes       text.match(/[A-Z]/g)
  //  number of lowercase       text.match(/[a-z]/g)
  //  number of spaces          text.match(/\s/g)
  //  number of digits          text.match(/\d/g)
  //  number of words           text.match(/[a-zA-Z]+/g)
  //  number of vowels          text.match(/[aeiou]/gi)
  //  numbers of consonant      text.match(/[bcdfghjklmnpqrstvwxyz]/gi)
  if (text != null) {
    data.Sentences = findLength(text.match(/\056/g));
    data.Words = findLength(text.match(/[a-zA-Z]+/g));
    data.Spaces = findLength(text.match(/\s/g));
    data.Uppercase = findLength(text.match(/[A-Z]/g));
    data.Lowercase = findLength(text.match(/[a-z]/g));
    data.Digits = findLength(text.match(/\d/g));
    data.Vowels = findLength(text.match(/[aeiou]/gi));
    data.Consonants = findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    data.SemiVowel=findLength(text.match(/[xy]/gi))
  }
  localStorage.setItem("data", JSON.stringify(data));

  window.location = "analyzedInfo.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = "";
  for (item in data) {
    htmlContent += `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p>
      </div>`;
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
};
