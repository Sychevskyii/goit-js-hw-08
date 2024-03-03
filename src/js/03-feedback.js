import throttle from 'lodash-es/throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input[name="email"]');
const textareaEl = formEl.querySelector('textarea[name="message"]');
const buttonEl = formEl.querySelector('button[type="submit"]');

formEl.addEventListener('input', throttle(onSaveFormData, 500));
buttonEl.addEventListener('click', onSubmitForm);

let formData = {};

const stringFormData = localStorage.getItem(FEEDBACK_KEY);
let parsedFormData = stringFormData ? JSON.parse(stringFormData) : {};

setInputsValue();

function onSaveFormData(e) {
  formData[e.target.name] = e.target.value;

  const mergedFormData = { ...parsedFormData, ...formData };
  const stringFormData = JSON.stringify(mergedFormData);

  localStorage.setItem(FEEDBACK_KEY, stringFormData);

  parsedFormData = mergedFormData;
}

function setInputsValue() {
  inputEl.value = parsedFormData.email || '';
  textareaEl.value = parsedFormData.message || '';
}

function onSubmitForm(e) {
  e.preventDefault();

  localStorage.removeItem(FEEDBACK_KEY);
  console.log(parsedFormData);

  formEl.reset();

  formData = {};

  parsedFormData = {};
  setInputsValue();
}
