import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelectorAll('#form');
form[0].addEventListener('submit', formSubmit);
 
function formSubmit(e) {
  e.preventDefault();
  let delay = form[0].elements.delay;
  let step = form[0].elements.step.value;
  let position = form[0].elements.amount.value;
 
  for (let i = 1; i <= position; i += 1) {
    createPromise(i, (i - 1) * Number(step) + Number(delay))
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
 
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  });
}
