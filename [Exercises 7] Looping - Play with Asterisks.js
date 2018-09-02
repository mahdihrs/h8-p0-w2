// 1. Menyusun Barisan Bintang

var rows1 = 5;

while (rows1 > 0) {
  console.log("*");
  rows1--;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
  var temp = ''
  for (var i = 0; i < rows2; i++) {
    for (var j = 0; j <= rows2 - 1; j++) {
      var temp = temp + '*'
    }
    if (i !== rows2 - 1) {
      temp = temp + '\n'
    }
  }
  
console.log(temp)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var temp = ''
  for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
      var temp = temp + '*'
    }
    if (i !== rows3 - 1) {
      temp = temp + '\n'
    }
  }

console.log(temp)