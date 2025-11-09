"use strict";

// Approximate average distances from the Sun in AU
const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.18,
  Neptune: 30.07
};

/**
 * Calculates the distance between two planets in AU.
 * @param {string} planet1 - Name of the first planet.
 * @param {string} planet2 - Name of the second planet.
 * @returns {number} Distance between the two planets in AU.
 */
function calculateDistance(planet1, planet2) {
  if (!planetDistances[planet1] || !planetDistances[planet2]) {
    throw new Error("Invalid planet name");
  }

  const distance1 = planetDistances[planet1];
  const distance2 = planetDistances[planet2];

  return Math.abs(distance1 - distance2);
}

module.exports = { calculateDistance };
