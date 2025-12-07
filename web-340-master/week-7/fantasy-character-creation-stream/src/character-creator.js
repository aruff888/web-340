// src/character-creator.js
const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super(options);
    this.dataChunks = []; 
  }

  _write(chunk, encoding, callback) {
    const input = chunk.toString().trim();

    if (input.length === 0) {
      // Emit an error when writing empty string
      this.emit("error", new Error("Input cannot be empty"));
      return callback();
    }

    this.dataChunks.push(input);
    callback();
  }

  _read() {
    if (this.dataChunks.length === 0) {
      this.push(null);
      return;
    }

    // Character data format:
    // 0 = class
    // 1 = gender
    // 2 = fun fact

    if (this.dataChunks.length >= 3) {
      const [charClass, gender, funFact] = this.dataChunks;

      const formatted = `Character Created:
Class: ${charClass}
Gender: ${gender}
Fun Fact: ${funFact}`;

      this.push(formatted);
      this.dataChunks = [];
    } else {
      // Wait for more writes
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
