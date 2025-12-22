"use strict";

const GameCharacters = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("returns data from the game-characters-data script", done => {
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual(expect.any(Array));
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  test("handles an error when the script is not found", done => {
    gameCharacters = new GameCharacters("missing-file.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });

  test("handles an error when the script fails", done => {
    gameCharacters = new GameCharacters("failing-script.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });
});
