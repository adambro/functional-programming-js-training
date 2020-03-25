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
 *   Arsenal: { scored: 3, lost: 0 },
 *   City: { scored: 4, lost: 2 },
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
