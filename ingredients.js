const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = ingredients 
while (i.length > 0) {
  console.log(i);
  i++;
} 

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
const reversed = ingredients.reverse();
console.log(reversed);