import throttle from 'lodash-es/throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl[0];
const textareaEl = formEl[1];
const buttonEl = formEl[2];

formEl.addEventListener('input', throttle(onSaveFormData, 500));
buttonEl.addEventListener('click', onSubmitForm);

let formData = {};

function onSaveFormData(e) {
  formData[e.target.name] = e.target.value;

  const stringFormData = JSON.stringify(formData);

  localStorage.setItem(FEEDBACK_KEY, stringFormData);
}

const stringFormData = localStorage.getItem(FEEDBACK_KEY);

const parsedFormData = JSON.parse(stringFormData);

function setInputsValue() {
  inputEl.value += parsedFormData.email;
  textareaEl.value += parsedFormData.message;
}

if (localStorage !== null) {
  setInputsValue();
}

function onSubmitForm(e) {
  e.preventDefault();

  formEl.reset();
  
  console.log(parsedFormData);

  localStorage.removeItem(FEEDBACK_KEY);
}


