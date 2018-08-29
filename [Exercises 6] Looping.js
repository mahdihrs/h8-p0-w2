// 1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA");
var loop = 2;
while (loop <= 20) {
  if (loop % 2 === 0) {
    console.log(loop + " - I love coding");
  }
  loop++;
} 


console.log("LOOPING KEDUA");
var loop2 = 20;
while (loop2 > 1) {
  if (loop2 % 2 === 0) {
    console.log(loop2 + " - I will become fullstack developer");
  }
  loop2--;
}



// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");

for (var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}


console.log("LOOPING KEDUA");

for (var i = 20; i > 0; i--) {
  console.log(i + " - I will become fullstack developer");
}


// 3. Angka Ganjil dan Genap

var ganjilGenap = 1;

while (ganjilGenap < 100) {
  if (ganjilGenap % 2 === 0) {
    console.log("GENAP");
  }
  else {
    console.log("GANJIL");
  }
  ganjilGenap++;
}

// counter+=2
var counter = 1;

while (counter < 100) {
  if (counter % 3 === 0) {
    console.log(counter + " KELIPATAN 3");
  }
  else {
    console.log(counter);
  }
  counter+=2
}

//counter+=5
var counter = 1;

while (counter < 100) {
  if (counter % 6 === 0) {
    console.log(counter + " KELIPATAN 6");
  }
  else {
    console.log(counter);
  }
  counter+=5
}

//counter+=9
var counter = 1;

while (counter < 100) {
  if (counter % 10 === 0) {
    console.log(counter + " KELIPATAN 10");
  }
  else {
    console.log(counter);
  }
  counter+=9
}

