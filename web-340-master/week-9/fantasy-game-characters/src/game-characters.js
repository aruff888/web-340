"use strict";

const { spawn } = require("child_process");
const path = require("path");

class GameCharacters {
  constructor(scriptFile) {
    this.scriptPath = path.join(__dirname, scriptFile);
  }

  getCharacters(callback) {
    let data = "";
    let errorData = "";

    let child;

    try {
      child = spawn("node", [this.scriptPath]);
    } catch (err) {
      console.error(err.message);
      callback(err, null);
      return;
    }

    child.stdout.on("data", chunk => {
      data += chunk.toString();
    });

    child.stderr.on("data", chunk => {
      errorData += chunk.toString();
    });

    child.on("close", () => {
      if (errorData) {
        console.error(errorData);
        callback(new Error(errorData), null);
      } else {
        callback(null, JSON.parse(data));
      }
    });

    child.on("error", err => {
      console.error(err.message);
      callback(err, null);
    });
  }
}

module.exports = GameCharacters;
