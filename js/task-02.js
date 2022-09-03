const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const newIngredients = [];

ingredients.forEach((ingredient) => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('item');
  newIngredients.push(newItem);
});

list.append(...newIngredients);
console.log(list);

// let newItem = document.createElement('li');

// for (let i = 0; i < ingredients.length; i += 1) {
//   newItem[i] = ingredients[i];

//   newItem.textContent = ingredients[i];

//   console.log(newItem);
// }
