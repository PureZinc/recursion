// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

function threeSum(arr: number[]) {
  if (arr.length < 3) {
    return [];
  }
  const lastElm = arr.pop();
  if (!lastElm) {
    return [];
  }

  const twoSumValue = (ary: number[], value: number) => {
    let ans: [number, number, number][] = [];
    for (const val of ary) {
      const third = value + val;
      if (ary.includes(third)) {
        ans.push([val, third, value])
      }
    }
    return ans;
  }

  return [...twoSumValue(arr, lastElm), ...threeSum(arr)]
}

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:
// console.log(rockPaperScissors(2));
// Expected Output: [
//   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
//   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
//   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
// ]
// console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

function rockPaperScissors(n) {
  const rps = [["rock"], ["paper"], ["scissors"]];

  if (n === 1) {
    return rps;
  }

  const extender = (play: string, playList: string[][]): string[][] => {
    return playList.map(game => [...game, play]);
  }

  let ans: string[][] = [];
  for (const play of rps) {
    ans = [...ans, ...extender(play[0], rockPaperScissors(n - 1))]
  }
  return ans;
}
