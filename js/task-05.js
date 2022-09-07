//Напиши скрипт, який під час набору тексту в інпуті
//input #name - input(подія input), підставляє його
//поточне значення в span #name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок
//"Anonymous".

const refs = {
  input: document.querySelector('.js-input'),
  output: document.querySelector('.js-output'),
  placeholderEl: document.querySelector('input[placeholder]'),
  defoultText: document.querySelector('span'),
};

const defaultText = refs.output.textContent;
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '')
    // refs.output.textContent = refs.defoultText.textContent;
    refs.output.textContent = defaultText;
}

// варіант if -якщо є плейсхолдер, виведи анонімус
//console.log(refs.placeholderEl.placeholder);

console.log(refs.defoultText.textContent);

// const defoultText = document.querySelector('span');
