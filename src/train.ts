// TASk L
function reverseSentence(word: string): string {
  let returnArray: string[] = [];
  const wordArray: string[] = word.split(" ");
  for (let item of wordArray) {
    const reverseItem: string = item.split("").reverse().join("");
    returnArray.push(reverseItem);
  }
  let returnString: string = returnArray.join(" ");
  return returnString;
}
console.log(reverseSentence("we like coding!"));

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
