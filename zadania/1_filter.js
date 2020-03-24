// Data.
const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

/**
 * Returns `true` if match ended up with draw.
 * Beware: future match has no score, so not a draw.
 * @param {object} match
 */
const onlyDraw = (match = {}) => {
  // TODO: Code to write here.
}

const matchesDrawn = matches.filter(onlyDraw);
console.table(matchesForTv);

// Tests for the output.

console.assert(matchesForTv.length === 1, "One match was draw.");
console.assert(matchesForTv[0].date === "2020-04-01", "United - City was draw");
