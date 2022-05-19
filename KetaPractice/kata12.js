const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  let foundRecipes = '';
  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) &&
      ingredientCheck(bakeryB, recipe.ingredients)) {
      foundRecipes = recipe.name;
    }
  }

  return foundRecipes;
}

function ingredientCheck(backers, ingredients) {
  let find = false
  for (const backer of backers) {
    for (const ingredient of ingredients) {
      if (backer === ingredient) {
        find = true
      }
    }
  }
  return find
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
