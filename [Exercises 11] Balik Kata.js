function balikKata(kata) {
  var balik1 = kata.split(""); //untuk bagi kata ke dalam substring
  var balik2 = balik1.reverse(); //substring dibalik susunan karakternya
  var balik3 = balik2.join(""); //elemen substring yang telah dibalik disatukan kembali
  return balik3
}

balikKata("saya mahdi haris");