import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const formEmail = inputForm.querySelector('input');
const formMessage = inputForm.querySelector('textarea');

let parsedInputs = {
  email: '',
  message: '',
};

let savedInputs = localStorage.getItem('feedback-form-state');

if (savedInputs) {
  parsedInputs = JSON.parse(savedInputs);
  formEmail.value = parsedInputs.email;
  formMessage.value = parsedInputs.message;
}

inputForm.addEventListener('input', throttle(handleInput, 500));
inputForm.addEventListener('submit', handleSubmit);

function handleInput() {
  const data = {
    email: inputForm.elements.email.value,
    message: inputForm.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function handleSubmit(event) {
  event.preventDefault();

  savInputs = localStorage.getItem('feedback-form-state');

  if (savedInputs) {
    formEmail.value = parsInputs.email;
    formMessage.value = parsInputs.message;
    parsInputs = JSON.parse(savInputs);
  }

  console.log(parsInputs);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
