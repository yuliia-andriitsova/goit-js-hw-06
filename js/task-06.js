const inputValidationEl = document.querySelector('#validation-input');
console.log(inputValidationEl);
const inputLength = Number(inputValidationEl.dataset.length);

inputValidationEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (inputValidationEl.value.length === inputLength) {
    changeClassEl('valid', 'invalid');
  } else {
    changeClassEl('invalid', 'valid');
  }
}

function changeClassEl(addCl, remCl) {
  inputValidationEl.classList.add(addCl);
  inputValidationEl.classList.remove(remCl);
}
// ---------------------------var-2
// function onInputBlur() {
//   if (inputValidationEl.value.length === inputLength) {
//     inputValidationEl.classList.remove('invalid');
//     inputValidationEl.classList.add('valid');
//   } else {
//     inputValidationEl.classList.remove('valid');
//     inputValidationEl.classList.add('invalid');
//   }
// }

//Напиши скрипт, який під час втрати фокусу на інпуті
//(подія blur), перевіряє його вміст щодо правильної кількості
//введених символів.

//Яка кількість смиволів повинна бути в інпуті, зазначається в
//його атрибуті data - length.
//Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.
