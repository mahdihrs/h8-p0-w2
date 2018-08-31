function xo(str) {
  //variabel jumlah karakter masing-masing huruf
    var jumlahX = str.split("x").length;
    var jumlahO = str.split("o").length;
  //conditional jumlah X dan O
    if (jumlahX === jumlahO) {
      return true;
    }
    else if (jumlahX > jumlahO || jumlahX < jumlahO) {
      return false;
    }
    else {
      return "Silahkan masukkan karakter yang benar"
    }
}

console.log(xo("xoxoxooo"));