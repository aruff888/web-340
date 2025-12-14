"use strict";

const fs = require('fs').promises;
const path = require('path');

const FILE_NAME = "characters.json";
const FILE_PATH = path.join(__dirname, FILE_NAME);

/**
 * Writes a character object to the file.
 * @param {Object} character
 */
async function createCharacter(character) {
  try {
    let existingCharacters = [];

    // Read existing characters if file exists
    try {
      const data = await fs.readFile(FILE_PATH, 'utf8');
      existingCharacters = JSON.parse(data);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err; // Ignore file-not-found
    }

    existingCharacters.push(character);

    // Write updated array back to file
    await fs.writeFile(FILE_PATH, JSON.stringify(existingCharacters, null, 2));

    return "Character saved successfully!";
  } catch (err) {
    throw err;
  }
}

/**
 * Reads all characters from the file.
 */
async function getCharacters() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
}

module.exports = { createCharacter, getCharacters };
