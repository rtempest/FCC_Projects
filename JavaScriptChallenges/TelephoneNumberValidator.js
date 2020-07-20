
// This function checks if a telephone number is a valid telephone number

function telephoneCheck(str) {
  // check number of digits
  var numDigs = str.replace(/\D+/g, "").length
  if (!(numDigs === 10 | numDigs === 11)) return false;
  // check first digit
  if (numDigs > 10 && str[0] !== "1") return false;
  // check brackets => (xxx)
  if (str.includes("(") | str.includes(")")) {
    if (!(/\(\d{3}\)/g.test(str))) return false;
  }
  // check for prohibited characters
if (/[^(\d+)|(\()|(\))|(\-)|\s]/.test(str)) return false;

return true;
}

telephoneCheck("1 555-555-5555");
