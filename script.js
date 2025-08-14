console.log("Welcome to Dev's Dev Tools");
// Q1. Anagarm function practice
// Anagram is a word/phrase/something which is formed by rearranging the words;

// function isAnagram(str1, str2) {
//     let arr1 = str1.toLowerCase().split("").sort(); // Sort  and split *
//     let arr2 = str2.toLowerCase().split("").sort(); // To lowercase
//     // console.log(arr1, "and", arr2);
//     if (arr1.length !== arr2.length) {
//         console.log("Words are of different length");
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             console.log("No they are not Anagram ");
//             return false; // This is very useful in the loop, it short-circuits loop if any one value mis-match
//         }
//     }
//     console.log("Yes they are Anagram ")
//     return true;
// };
// isAnagram("mahxadev", "mahadevx");

//Q2. Find the largest number from an array and return it;

// function isLargestNum(arr1) {
//     let sortedArray1 = arr1.sort(function (a, b) { return a - b; });
//     console.log(Number(sortedArray1));
//     console.log(sortedArray1[sortedArray1.length - 1 ], "is the largest number among the array");
// }
// isLargestNum([1, 2, 33, 4, 5, 99,125,131,145]);

//Q3. Count vowels and return number of vowels in the string.

// function countVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let uniqueVowels = new Set();
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             uniqueVowels.add(char);
//         }
//     }
//     console.log(`Unique vowels in '${str}':`, [...uniqueVowels]);
//     console.log(`Count of unique vowels: ${uniqueVowels.size}`);
// }

// countVowels('mahadeva');

// Q4. Reverse a string and return it;

// Take input from the user,
// // And then split those alphabets into an array, and then reverse the order of the arrray and then join the elements inside the array and then convert it into string and display 

// function reverseString(str){
//     let arrayA = [...str];
//     let reverseArrayA  = arrayA.reverse();
//     console.log(reverseArrayA.join(""));
// };
// reverseString("Mahadev");


