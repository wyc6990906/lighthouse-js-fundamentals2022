const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}
// Write a for loop that prints out the contents of ingredients:

for (var j = 0; j < ingredients.length; j++) {
  var ingredient = ingredients[j]
  console.log(ingredient)
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var j = ingredients.length; j > -1; j--) {
  var ingredient = ingredients[j]
  console.log(ingredient)
}


