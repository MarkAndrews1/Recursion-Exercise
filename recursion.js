/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, currMax = 0) {
  if(i === words.length) return currMax
  currMax = Math.max(words[i].length, currMax)
  return longest(words, i+1, currMax)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr='') {
  if(i >= str.length) return newStr
  newStr += str[i]
  return everyOther(str, i+2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  str = str.toLowerCase()
  
  if(i >= str.length / 2) return true
  if(str[i] !== str[str.length - i - 1]) return false

  return isPalindrome(str, i+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i === arr.length) return -1
  if(arr[i] === val) return i

  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length <= 1) return str
  return str[str.length - 1] + revString(str.slice(0,-1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = []
  for(let key in obj){
    if(typeof obj[key] === 'string'){
      strArr.push(obj[key])
    }else if(typeof obj[key] === 'object'){
      strArr = strArr.concat(gatherStrings(obj[key]))
    }
  }
  return strArr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length-1) {
  let mid = Math.floor((start + end) / 2)

  if(start > end) return -1

  if(arr[mid] === val) return mid

  if(val < arr[mid]) return binarySearch(arr, val, start, mid-1)

  return binarySearch(arr, val, mid + 1, end)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
