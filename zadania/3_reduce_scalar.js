// Data.
const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

/**
 * Returns total number of goals scored in all matches.
 * @param {object} match
 */
const sumScores = (total, match = {}) => {
  // TODO: Code to write here.
}

const goals = matches.reduce(sumScores, 0);
console.log(`Teams have scored ${goals} goals.`);

// Tests for the output.
console.assert(Number.isInteger(goals), "Total goals must be a number.");
console.assert(goals === 9, "There should be 9 goals in total.");
