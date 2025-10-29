/**
 * Author: Amanda Ruff
 * Date: 10/27/2025
 * File Name: recipes.js
 * Description: Module that defines functions for recipe creation, timer setting, and program exit.
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions using CommonJS
module.exports = { createRecipe, setTimer, quit };
