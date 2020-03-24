// Data.
const cities = {
  Arsenal: "London",
  Chelsea: "London",
  City: "Manchester",
  United: "Manchester"
};

const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

/**
 * Returns match object where `teamA` and `teamB` contain city name.
 * @param {object} match
 */
const appendCityNameToTeams = (match = {}) => {
  // TODO: Code to write here.
}

const matchesForTv = matches.map(appendCityNameToTeams);
console.table(matchesForTv);

// Tests for the output.
const hasCity = (name = "") => name.includes("London") || name.includes("Manchester");
const bothTeamsHaveCities = (match = {}) => hasCity(match.teamA) && hasCity(match.teamB);

console.assert(matchesForTv.every(bothTeamsHaveCities), "Missing city names.");
