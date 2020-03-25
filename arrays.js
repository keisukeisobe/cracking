// is unique: implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

//Plan: use a sort of pseudo-hash map of existing ASCII/Unicode character values

const isUnique = function(string){
  //if string is longer than 128 characters, there must be duplicate Unicode characters
  if (string.length > 128){
    return false;
  }
  let arr = [];
  for (let i = 0; i < string.length; i++){
    let val = string.charCodeAt(i);
    if (arr[val]){
      return false;
    } else {
      arr[val] = true;
    }
  }
  return true;
}

// console.log(isUnique('abcdefgh'));
// console.log(isUnique('abcdefgha'));

//check permutation: given two string, write a method to decide if one is a permutation of the other

const checkPermutation = function(str1, str2){
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str1 === str2;
}

// console.log(checkPermutation('racecar', 'carrace'));
// console.log(checkPermutation('racecar', 'carraces'));

//URLify: write a method to replace all spaces in a string with '%20'. 
//Example input: "Mr John Smith      ", 13
//Example output: "Mr%20JohnSmith"

const urlify = function(str, length){
  let spaceCount = 0;
  for (let i = 0; i < length; i++){
    if (str[i] === ' '){
      spaceCount++;
    }
  }

  let index = length + spaceCount * 2;
  if (length < str.length){
    str[length] = '\0';
  }

  for (let i = length - 1; i >= 0; i--){
    if (str[i] === ' '){
      str[index - 1] = '0';
      str[index - 2] = '2';
      str[index - 3] = '%';
      index = index - 3;
    } else {
      str[index - 1] = str[i];
      index--;
    }
  }
}

//palindrome permutation: given a string, write a function to check if it is a permutation of a palindrome

const palindromePermutation = function(str) {
  let arr = new Array().fill(false);
  for (let i = 0; i < str.length; i++){
    arr[str.charCodeAt(i)] = !arr[str.charCodeAt(i)];
  }
  console.log(arr);
  let sum = arr.reduce(function(a,b){
    return a + b
  }, 0);
  return sum === str.length%2;
}

console.log(palindromePermutation('tacocat'));
console.log(palindromePermutation('taccat'));
console.log(palindromePermutation('tacocats'));

