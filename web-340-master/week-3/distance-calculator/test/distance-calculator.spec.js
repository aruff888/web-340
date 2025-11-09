"use strict";

const assert = require("assert");
const { calculateDistance } = require("../src/distance-calculator");

// Test 1 – Earth to Mars
function testEarthToMars() {
  try {
    const expectedValue = 0.52; // |1.00 - 1.52|
    assert.strictEqual(calculateDistance("Earth", "Mars"), expectedValue);
    console.log("✅ Passed: testEarthToMars");
    return true;
  } catch (error) {
    console.error(`❌ Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2 – Venus to Jupiter
function testVenusToJupiter() {
  try {
    const expectedValue = 4.48; // |5.20 - 0.72|
    assert.strictEqual(calculateDistance("Venus", "Jupiter"), expectedValue);
    console.log("✅ Passed: testVenusToJupiter");
    return true;
  } catch (error) {
    console.error(`❌ Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

// Test 3 – Neptune to Mercury
function testNeptuneToMercury() {
  try {
    const expectedValue = 29.68; // |30.07 - 0.39|
    assert.strictEqual(calculateDistance("Neptune", "Mercury"), expectedValue);
    console.log("✅ Passed: testNeptuneToMercury");
    return true;
  } catch (error) {
    console.error(`❌ Failed testNeptuneToMercury: ${error.message}`);
    return false;
  }
}

// Run all tests
function runTests() {
  console.log("Running Planet Distance Tests...\n");

  const results = [
    testEarthToMars(),
    testVenusToJupiter(),
    testNeptuneToMercury()
  ];

  const passed = results.filter(r => r).length;
  console.log(`\n${passed}/3 tests passed.`);
}

runTests();
