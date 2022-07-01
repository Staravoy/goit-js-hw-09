//---------------------variables----------------------------//

const startBtn = document.querySelectorAll('[data-start]');
const stopBtn = document.querySelectorAll('[data-stop]');
let timerId = null;

//---------------------function----------------------------//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn[0].addEventListener('click', () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor= getRandomHexColor;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});