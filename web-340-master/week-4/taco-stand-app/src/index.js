/**
 * Author: Amanda Ruff
 * Date: 11/16/25
 * File Name: index.js
 * Description: Entry point for Taco Stand App
 */

"use strict";

import TacoStandEmitter from "./taco-stand.js";
import readline from "readline";

const stand = new TacoStandEmitter();

stand.on("serve", (customer) => {
    console.log(`Taco Stand serves: ${customer}`);
});

stand.on("prepare", (taco) => {
    console.log(`Taco Stand prepares: ${taco} taco`);
});

stand.on("rush", (rush) => {
    console.log(`Taco Stand handles rush: ${rush}`);
});

// CLI setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

rl.setPrompt("> ");
rl.prompt();

rl.on("line", (input) => {
    const [command, arg] = input.split(" ");

    switch (command) {
        case "serve":
            stand.serveCustomer(arg);
            break;
        case "prepare":
            stand.prepareTaco(arg);
            break;
        case "rush":
            stand.handleRush(arg);
            break;
        default:
            console.log("Unknown command.");
    }

    rl.prompt();
});
