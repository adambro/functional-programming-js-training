// Data.
const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

// TODO: write code using expressions, not statements.
// Hint: you should write at least 2 functions as result.

const matchesDrawn = matches;
console.table(matchesDrawn);

// Tests for the output.

console.assert(matchesDrawn.length === 1, "One match was draw.");
console.assert(matchesDrawn[0].date === "2020-04-01", "United - City was draw");
console.assert(matches.length === 4, "Original data must be intact.");
