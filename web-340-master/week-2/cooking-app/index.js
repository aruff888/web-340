/**
 * Author: Amanda Ruff
 * Date: 10/27/2025
 * File Name: index.js
 * Description: Demonstrates the functionality of the recipe module.
*/

// Import the module using require
const recipes = require("./recipes");

// Demonstrate each function
console.log(recipes.createRecipe(["flour", "sugar", "eggs"]));
console.log(recipes.setTimer(30));
console.log(recipes.quit());
