// Task H
function getPositive(array: number[]): string {
  return array.filter((ele) => ele > 0).join("");
}

console.log(getPositive([1, -4, 2]));

// Task G
// function getHighestIndex(array) {
//   if (array.every((ele) => typeof ele === "number")) {
//     let highIndex = 0;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > array[highIndex]) {
//         highIndex = i;
//       }
//     }
//     return highIndex;
//   } else {
//     return "All value are not numbers in array";
//   }
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));
