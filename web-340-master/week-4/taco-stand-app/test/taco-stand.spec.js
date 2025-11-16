/**
 * Author: Amanda Ruff
 * Date: 11/16/25
 * File Name: taco-stand.spec.js
 * Description: Tests for Taco Stand Emitter Module
 */

"use strict";

import assert from "assert";
import TacoStandEmitter from "../src/taco-stand.js";

// Test 1: serveCustomer
function testServeCustomer() {
    try {
        const stand = new TacoStandEmitter();
        stand.on("serve", (customer) => {
            assert.equal(customer, "John");
        });

        stand.serveCustomer("John");

        console.log("Passed testServeCustomer");
        return true;
    } catch (err) {
        console.error(`Failed testServeCustomer: ${err}`);
        return false;
    }
}

// Test 2: prepareTaco
function testPrepareTaco() {
    try {
        const stand = new TacoStandEmitter();
        stand.on("prepare", (taco) => {
            assert.equal(taco, "beef");
        });

        stand.prepareTaco("beef");

        console.log("Passed testPrepareTaco");
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco: ${err}`);
        return false;
    }
}

// Test 3: handleRush
function testHandleRush() {
    try {
        const stand = new TacoStandEmitter();
        stand.on("rush", (rushType) => {
            assert.equal(rushType, "lunch");
        });

        stand.handleRush("lunch");

        console.log("Passed testHandleRush");
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush: ${err}`);
        return false;
    }
}

// Run all tests
testServeCustomer();
testPrepareTaco();
testHandleRush();
