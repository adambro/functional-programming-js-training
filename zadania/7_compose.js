// Data.
const matches = [
  { date: "2020-03-28", teamA: "Arsenal", scoreA: 3, teamB: "Chelsea", scoreB: 0 },
  { date: "2020-03-30", teamA: "City", scoreA: 3, teamB: "United", scoreB: 1 },
  { date: "2020-04-01", teamA: "United", scoreA: 1, teamB: "City", scoreB: 1 },
  { date: "2020-04-03", teamA: "Chelsea", teamB: "Arsenal" },
];

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

/**
 * Returns function that processes either `teamA` or `teamB`.
 */
const appendCity = () => {
  const cities = {
    Arsenal: "London",
    Chelsea: "London",
    City: "Manchester",
    United: "Manchester"
  };
  // TODO: Return function that will return object with appended city name.
  return;
};

const appendCityBothTeams = compose();
const matchesForTv = matches.map(appendCityBothTeams);
console.table(matchesForTv);

// Tests for the output.
console.assert(typeof appendCity === "function", "Make a function.");
console.assert(typeof appendCity("teamA") === "function", "Make a function that returns function.");
const tv = appendCity("teamA")({ teamA: "City" })
console.assert(tv.teamA.includes("Manchester"), "City name missing.");

const hasCity = (name = "") => name.includes("London") || name.includes("Manchester");
const bothTeamsHaveCities = (match = {}) => hasCity(match.teamA) && hasCity(match.teamB);
console.assert(matchesForTv.every(bothTeamsHaveCities), "Missing city names.");
