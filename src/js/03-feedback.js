import throttle from 'lodash-es/throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input[name="email"]');
const textareaEl = formEl.querySelector('textarea[name="message"]');
const buttonEl = formEl.querySelector('button[type="submit"]');

formEl.addEventListener('input', throttle(onSaveFormData, 500));
buttonEl.addEventListener('click', onSubmitForm);

let formData = {};

function onSaveFormData(e) {
  formData[e.target.name] = e.target.value;

  const stringFormData = JSON.stringify(formData);

  localStorage.setItem(FEEDBACK_KEY, stringFormData);

  parsedFormData = formData;
}

const stringFormData = localStorage.getItem(FEEDBACK_KEY);
let parsedFormData = {};

if (stringFormData !== null) {
  parsedFormData = JSON.parse(stringFormData);
  setInputsValue();
}

function setInputsValue() {
  inputEl.value = parsedFormData.email || '';
  textareaEl.value = parsedFormData.message || '';
}

function onSubmitForm(e) {
  e.preventDefault();

  console.log(parsedFormData);

  localStorage.removeItem(FEEDBACK_KEY);

  formEl.reset();
}


