function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

btnCreate.addEventListener('click', () => {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
});

//Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх
//у div#boxes.
