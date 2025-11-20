/**
 * Author: Amanda Ruff
 * Date: 11/20/25
 * File Name: pie.js
 * Description: Module for baking pies.
 */
"use strict";

// src/pie.js
function bakePie(type, ingredients) {
  const essentials = ["flour", "sugar", "butter"];

  const missing = essentials.some(item => !ingredients.includes(item));

  if (missing) {
    console.warn("Missing essential ingredient!");
    process.exit(1);
  }

  return `Your ${type} pie has been baked!`;
}

module.exports = bakePie;
