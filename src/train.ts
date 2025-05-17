// TASK ZD
function changeNumberInArray(
  num1: number,
  arr: number[],
  num2: number
): number[] {
  const result = [...arr];

  if (num1 >= 0 && num1 < arr.length) {
    result[num1] = num2;
  }

  return result;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));
// TASK ZC
// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(10));

// TASK ZB
// function randomBetween(num1: number, num2: number): number {
//   if (num1 > num2) {
//     [num1, num2] = [num2, num1];
//   }

//   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// console.log(randomBetween(30, 50));
// TASK Z
// function sumEvens(num: number[]): number {
//   const sum: number[] = num.filter((ele) => ele % 2 === 0);
//   return sum.reduce((total, current) => total + current, 0);
// }
// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 3, 2]));
// TASK Y
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((ele) => arr2.includes(ele));
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// TASK X
// import { T } from "./libs/types/common";
// function countOccurrences(obj: T, str: string): number {
//   if (typeof obj !== "object" || obj === null) {
//     return 0;
//   }

//   let count = 0;

//   for (const prop in obj) {
//     if (prop === str) {
//       count++;
//     }

//     if (typeof obj[prop] === "object" && obj[prop] !== null) {
//       count += countOccurrences(obj[prop], str);
//     }
//   }

//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "model"
//   )
// );
// TASK W
// function chunkArray(arr: number[], num: number) {
//   const resultArr = [];
//   for (let i = 0; i < arr.length; i += num) {
//     const chunk = arr.slice(i, i + num);
//     resultArr.push(chunk);
//   }
//   return resultArr;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// TASK V
// import { T } from "./libs/types/common";

// function countChars(input: string): T {
//   const charsObj: T = {};
//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (charsObj[char]) {
//       charsObj[char]++;
//     } else {
//       charsObj[char] = 1;
//     }
//   }

//   return charsObj;
// }
// console.log(countChars("hello"));
// TASK U
// function sumOdds(input: number) {
//   const numArray = [];
//   for (let i = 0; i < input; i++) {
//     numArray.push(i);
//   }
//   return numArray.filter((num) => num! % 2).length;
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));

// Task T
// function mergeSortedArrays(array1: number[], array2: number[]): number[] {
//   const joinedArray: number[] = array1.concat(array2);
//   return joinedArray.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// Task S
// function missingNumber(input: number[]): number {
//   input.sort((a, b) => a - b);

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] !== i) {
//       return i;
//     }
//   }
//   return input.length;
// }
// console.log(missingNumber([3, 0, 1]));
// Task R
// function calculate(input: string): number {
//   const parts = input.split(" + ");
//   let sum = parseInt(parts[0]);

//   for (let i = 1; i < parts.length; i++) {
//     sum += parseInt(parts[i]);
//   }
//   return sum;
// }

// console.log(calculate("1 + 3"));

// Task Q
// import { T } from "./libs/types/common";
// function hasProperty(object: T, string: string): boolean {
//   const keys: string[] = Object.keys(object);
//   return keys.includes(string);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
// Task P
// import { T } from "./libs/types/common";
// function objectToArray(input: T): any[] {
//   let keys: string[] = Object.keys(input);
//   return keys.map((key) => [key, input[key]]);
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// Task O
// function calculateSumOfNumbers(array: any[]): Number {
//   let result: number = 0;
//   for (let ele of array) {
//     if (typeof ele === "number") {
//       result += ele;
//     }
//   }
//   return result;
// }
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
// Task N
// function palindromCheck(word: string): boolean {
//   const reversedWord: string = word.split("").reverse().join("");
//   if (reversedWord === word) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

// TASK M
// First way
// function getSquareNumbers(numArray: number[]) {
//   const resultArray = numArray.map((num) => {
//     return {
//       number: num,
//       square: num * num,
//     };
//   });
//   return resultArray;
// }

// // Second way
// function getSquareNumbers2(numArray: number[]) {
//   const resultArray = [];
//   for (let i = 0; i < numArray.length; i++) {
//     const resultArrayObj = {
//       number: numArray[i],
//       square: numArray[i] * numArray[i],
//     };
//     resultArray.push(resultArrayObj);
//   }
//   return resultArray;
// }
// console.log(getSquareNumbers([1, 2, 3]));
// console.log("====================================");
// console.log(getSquareNumbers2([1, 2, 3]));

// TASK L
// function reverseSentence(word: string): string {
//   let returnArray: string[] = [];
//   const wordArray: string[] = word.split(" ");
//   for (let item of wordArray) {
//     const reverseItem: string = item.split("").reverse().join("");
//     returnArray.push(reverseItem);
//   }
//   let returnString: string = returnArray.join(" ");
//   return returnString;
// }
// console.log(reverseSentence("we like coding!"));

/* Validation:
1=> Frontend Validation
2=> Pipe Validation
3=> Backend Validation
4=> Database Validation
*/

// Task K
// const vowels: string[] = ["a", "e", "o", "u", "i"];

// function countVowels(word: string): number {
//   let vowelCounts: number = 0;
//   const stringArray: string[] = word.split("");
//   for (let i = 0; i < stringArray.length; i++) {
//     if (vowels.includes(stringArray[i])) {
//       vowelCounts++;
//     }
//   }
//   return vowelCounts;
// }
// console.log(countVowels("string"));

// Cookies aspects: join with request and destroy itself
// Task J
// function findLongestWord(word: string): string {
//   const newWords: string[] = word.split(" ");
//   let longestWord: string = newWords[0];
//   for (let newWord of newWords) {
//     if (newWord.length > longestWord.length) {
//       longestWord = newWord;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("I came from Uzbekistan"));

// Task I

// function majorityElement(arr: number[]): number {
//   arr.sort((a: number, b: number) => a - b);

//   let currentCount: number = 1;
//   let maxCount: number = 0;
//   let majorityNum: number = arr[0];
//   let currentNum: number = arr[0];

//   for (let i: number = 1; i < arr.length; i++) {
//     if (arr[i] === currentNum) {
//       currentCount++;
//     } else {
//       if (currentCount > maxCount) {
//         maxCount = currentCount;
//         majorityNum = currentNum;
//       }
//       currentNum = arr[i];
//       currentCount = 1;
//     }
//   }

//   if (currentCount > maxCount) {
//     majorityNum = currentNum;
//   }

//   return majorityNum;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

/* Project Standards
  -- Logging standards
  -- Naming standards:
  Camel case => variable, function (goHome)
  Pascal case => Class (MemberService)
  Snake case =. Css  (button_style)
  Kebab case => for folders and files (common-type)
  -- Error handling:

  Traditional Frontend development => BSSR => EJS
  Modern FD => SPA => REACT(JSON data qabul qilinadi)
  
 */

// Task H2
// function getDigits(word: string): string {
//   return word
//     .split("")
//     .filter((ele) => Number(ele))
//     .join("");
// }
// console.log(getDigits("m14i1t"));

// Task H
// function getPositive(array: number[]): string {
//   return array.filter((ele) => ele > 0).join("");
// }

// console.log(getPositive([1, -4, 2]));

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
