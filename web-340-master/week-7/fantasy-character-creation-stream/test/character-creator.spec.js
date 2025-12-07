// test/character-creator.spec.js
const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator Duplex Stream", () => {

  test("Test 1: processes data correctly when written to", (done) => {
    const creator = new CharacterCreator();

    creator.write("Warrior");
    creator.write("Male");
    creator.write("Loves swords");

    creator.on("data", (output) => {
      expect(output.toString()).toContain("Warrior");
      expect(output.toString()).toContain("Male");
      expect(output.toString()).toContain("Loves swords");
      done();
    });

    creator.read();
  });

  test("Test 2: emits error when an empty string is written", (done) => {
    const creator = new CharacterCreator();

    creator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Input cannot be empty");
      done();
    });

    creator.write(""); // Should trigger error
  });

  test("Test 3: transforms data correctly", (done) => {
    const creator = new CharacterCreator();

    creator.write("Mage");
    creator.write("Other");
    creator.write("Can cast fireballs");

    creator.on("data", (output) => {
      const text = output.toString();
      expect(text).toBe(
        `Character Created:
Class: Mage
Gender: Other
Fun Fact: Can cast fireballs`
      );
      done();
    });

    creator.read();
  });

});
