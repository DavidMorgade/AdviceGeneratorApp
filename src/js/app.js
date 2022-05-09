'use strict';

document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

// Init app function
function initApp() {
  adviceFunction();
  btnFunction();
}

///////////////////// fetch advice from api /////////////////////
const adviceFunction = function () {
  const containerAdv = document.querySelector('.main__divquote');
  const containerNum = document.querySelector('.main__divheading');
  fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 220)}`)
    .then(response => {
      return response.json();
    })
    .then(adviceData => {
      const adviceObj = adviceData.slip;
      containerAdv.innerHTML = `<blockquote class="main__quote"><q>${adviceObj.advice}</q></blockquote>`;
      containerNum.innerHTML = `<h1 class="main__heading">Advice #${adviceObj.id}</h1>`;
    })
    .catch(error => {
      console.log(error);
    });
};
////////////////// btn generates new  ////////////////////////
const btnFunction = function () {
  const btnAdv = document.querySelector('.main__circle');
  btnAdv.addEventListener('click', () => {
    adviceFunction();
  });
};
