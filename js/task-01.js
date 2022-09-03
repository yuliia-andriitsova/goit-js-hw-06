const ulEl = categories.querySelectorAll('ul');
console.log('Number of categories: ', ulEl.length);

const categoryEl = categories.querySelectorAll('h2');


for (let i = 0; i < categoryEl.length; i++) {
  console.log('Category: ', categoryEl[i].textContent);

  console.log('Elements: ', ulEl[i].children.length);
}
