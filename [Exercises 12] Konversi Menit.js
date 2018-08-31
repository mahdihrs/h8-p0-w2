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
         else {
           mins;
         }
      return hour + ":" + mins;
    }
  else {
      return "Waktu salah";
    }
    return hour,mins;
  }

konversiMenit(70);