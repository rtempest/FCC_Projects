// This function takes any number and returns its roman numeral equivalent


function convertToRoman(num) {
  var romNums = {
    1:'I',
    4:'IV',
    5:'V',
    9:'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
  }

  const keys = Object.keys(romNums)
  const filKeys = keys.filter(x => x <= num).sort((a,b) => b-a)

  // append largest number while the it fits in num
  var fitArr = []
  for (var i of filKeys) {
    while(i <= num) {
      fitArr.push(i)
      num -= i;
    }
  }

 return fitArr.map(item => romNums[item]).join('');
}


convertToRoman(400);
