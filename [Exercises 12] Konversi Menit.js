function konversiMenit(menit) {
  if (menit % 60 === 0) {
      var hour = menit / 60;
      var mins = "00";
      return hour + ":" + mins;
  }
  else if (menit % 60 !== 0) {
      var hour = Math.floor(menit/60);
      var mins = menit % 60;
      if (mins < 10) {
        mins = "0" + mins;
      }
      return hour + ":" + mins;
    }
  }

//TEST CASE
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
