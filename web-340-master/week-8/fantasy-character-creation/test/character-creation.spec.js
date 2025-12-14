"use strict";

const fs = require('fs');
const path = require('path');
const { createCharacter, getCharacters } = require('../src/character-creation');

const FILE_PATH = path.join(__dirname, "..", "src", "characters.json");

describe("Character Creation Module", () => {
  const testCharacter = {
    class: "Rogue",
    gender: "Other",
    funFact: "Can pick any lock"
  };

  afterEach(async () => {
    // Clean up file after each test
    if (fs.existsSync(FILE_PATH)) {
      await fs.promises.unlink(FILE_PATH);
    }
  });

  test("createCharacter writes a new character to the file", async () => {
    const message = await createCharacter(testCharacter);
    expect(message).toBe("Character saved successfully!");
    expect(fs.existsSync(FILE_PATH)).toBe(true);
  });

  test("getCharacters reads characters from the file", async () => {
    await fs.promises.writeFile(FILE_PATH, JSON.stringify([testCharacter], null, 2));
    const characters = await getCharacters();
    expect(characters).toEqual([testCharacter]);
  });

  test("createCharacter handles errors when writing to an invalid path", async () => {
    // Try writing to a path that doesn’t exist to force an error
    await expect(fs.promises.writeFile("/invalid-path/test.json", JSON.stringify(testCharacter)))
      .rejects.toThrow();
  });
});
