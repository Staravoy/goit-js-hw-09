//---------------------variables----------------------------//

const startBtn = document.querySelectorAll('#start');
const stopBtn = document.querySelectorAll('#stop');
let timerId = null;

//---------------------function----------------------------//
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

startBtn[0].addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style = `background-color: ${getRandomHexColor()}`;
    startBtn[0].disabled = true;
    stopBtn[0].disabled = false;
  }, 1000);
});

 
stopBtn[0].addEventListener('click', () => {
  clearInterval(timerId);
  startBtn[0].disabled = false;
  stopBtn[0].disabled = true;
});