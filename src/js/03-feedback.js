'use strict';

import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(inputData, 500));
feedbackForm.addEventListener('submit', inputSubmit);

if (localStorage.getItem('feedback-form-state')) {
  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  feedbackForm.querySelector('input').value = parsedData.email;
  feedbackForm.querySelector('textarea').value = parsedData.message;
}

function inputData(e) {
  const {
    elements: { email, message },
  } = feedbackForm;

  /**znach form */

  const data = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function inputSubmit(e) {
  e.preventDefault();

  const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(parsedData);

  /**clean */
  localStorage.removeItem('feedback-form-state');

  e.currentTarget.reset();
}
