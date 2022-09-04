const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const counterValue = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  console.log(counter);
  counterValue.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
  counter.increment();
  console.log(counter);
  counterValue.textContent = counter.value;
});

//Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.
