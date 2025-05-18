// Step 1: Global Scope Variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function Scoped Variable and Array Modification
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Block Scope and Another Function
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
  }

  window.changeFeaturedDrink = changeFeaturedDrink;
}
