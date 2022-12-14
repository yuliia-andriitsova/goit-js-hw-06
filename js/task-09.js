function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgrColor = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

button.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  bgrColor.style.backgroundColor = color;
  // console.log(getRandomHexColor());
  colorName.textContent = color;
});

//Напиши скрипт, який змінює кольори фону елемента <body> через
//інлайн - стиль по кліку на button.change - color і виводить значення кольору
//в span.color.
//Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.
