// level {1/2/3}
// level {1/2/3}
//chosen level 2

// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array:
// [1, 3, 4, 6, 7, 8]
// ```
// ```
// Output should be array: [1, 3, 7]
// ```
// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'
// ```
// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// ```
// ```
// Output should be a number: 8

//1

function removeEvenNums(numbers) {
  return numbers.filter((n) => n % 2 !== 0);
}

const oddNumbers = removeEvenNums([1, 3, 4, 6, 7, 8]);
console.log("Odd numbers list is :", oddNumbers);

//2
const vowels = ["a", "e", "i", "o", "u"];
const myString = "Elie";

let new_string = "";
for (let i = 0; i < myString.length; i++) {
  if (vowels.includes(myString[i])) {
    new_string += myString[i].toUpperCase();
  } else {
    new_string += myString[i];
  }
}
console.log(new_string);

//3
const my_array1 = [1, 3, 4, 6, 7, 8, 2, 5];
console.log("Maximum number is:", Math.max(...my_array1));
