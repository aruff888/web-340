/**
 * Author: Amanda Ruff
 * Date: 11/20/25
 * File Name: pie.spec.js
 * Description: Tests for the pie baking module.
 */

"use strict";

const bakePie = require("../src/pie");

describe("bakePie()", () => {

  test("bakes pie successfully when all essential ingredients are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("Your apple pie has been baked!");
  });

  test("returns correct message for other pie types", () => {
    const result = bakePie("cherry", ["flour", "sugar", "butter", "cherries"]);
    expect(result).toBe("Your cherry pie has been baked!");
  });

  // MUST BE LAST because it triggers process.exit
  test("warns and exits when an essential ingredient is missing", () => {
    const warnMock = jest.spyOn(console, "warn").mockImplementation(() => {});
    const exitMock = jest.spyOn(process, "exit").mockImplementation(() => {});

    bakePie("pumpkin", ["flour", "sugar"]); // butter missing

    expect(warnMock).toHaveBeenCalled();
    expect(exitMock).toHaveBeenCalledWith(1);

    warnMock.mockRestore();
    exitMock.mockRestore();
  });

});
