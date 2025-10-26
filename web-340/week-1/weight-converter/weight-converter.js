/**
 * Author: Amanda Ruff
 * Date: 10/26/2025
 * File Name: weight-converter.js
 * Description: Converts pounds to kilograms. Accepts a command line argument for pounds
 *              and prints the result in kilograms, rounded to two decimal places.
*/

"use strict";

// Get command line arguments
const args = process.argv.slice(2);

// Check if no argument is provided
if (args.length === 0) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
}

// Get the pounds value
const pounds = args[0];

// Check if the argument is a number
if (isNaN(pounds)) {
    console.error("Input must be a number.");
    process.exit(1);
}

// Convert pounds to kilograms
const kilograms = parseFloat(pounds) * 0.45359237;

// Print the result rounded to two decimal places
console.log(kilograms.toFixed(2));
