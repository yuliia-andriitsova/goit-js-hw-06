// Напиши скрипт, який реагує на зміну значення input#font-size-control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
//font - size.В результаті, перетягуючи повзунок, буде змінюватися
//розмір тексту.

const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener('input', (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
  // var2-  text.style.fontSize = `${sizeControl.value}.px`;
  //   console.log(sizeControl.value);
});
