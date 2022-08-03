import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelectorAll('#form');
form.addEventListener('submit', formSubmit);

function formSubmit (e) {
  e.preventDefault;
  let delay = form.element.delay.value;
  let step = form.elements.step.value;
  let amount = form.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, (i - 1) * Number(step) + Number(delay))
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
     resolve({ position, delay });
  } else {
    // Reject
       reject({ position, delay });
  }
}
