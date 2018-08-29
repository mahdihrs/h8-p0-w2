function bandingkanAngka (angka1, angka2) {
  if (angka1 === angka2) {
    return -1;
  }
  else if (angka1 < angka2) {
    return true;
  }
  else if (angka1 > angka2) {
    return false;
  }
  else {
    return "Masukkan kembali angka dengan benar!";
  }
}