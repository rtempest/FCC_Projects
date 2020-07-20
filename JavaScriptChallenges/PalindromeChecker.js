// This function checks if a sentence or phrase is a palindrome (the same in reverse)

function palindrome(str) {
  let regex = /\W+|_/g
  var newStr = str.replace(regex, '').toLowerCase();
  var revStr = newStr.split('').reverse().join('');

  return newStr === revStr
}



console.log(palindrome("_eye"));
