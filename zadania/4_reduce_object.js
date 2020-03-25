// Data.
const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

/**
 * Returns object representing map how many goals team scored.
 * @param {object} match
 * @returns {object} Example:
 * {
 *   Arsenal: 3,
 *   City: 4,
 *   ...
 * }
 */
const makeTable = (table = {}, match = {}) => {
  // TODO: Code to write here.
}

const table = matches.reduce(makeTable, {});
console.log(table);

// Tests for the output.
console.assert(typeof table === "object", "Table must be an object.");
console.assert(table["Arsenal"] === 3, "Arsenal scored 3 goals.");
console.assert(table["Chelsea"] === 0, "Chelsea scored 0 goals.");
console.assert(table["City"] === 4, "City scored 4 goals.");
console.assert(table["United"] === 2, "United scored 2 goals.");
