var namaKucing = "cimol"
console.log(namaKucing) // cimol 

let dataNamaSiswa = "Vadia"
dataNamaSiswa = "Meisya"
console.log(dataNamaSiswa) // Meisya

const number = 3.14
console.log(number) // 3.14



let data = "Vadia"


let dataBaru = 'Meisya'

const apakahSudahLulus = true
const apakahSudahBekerja = false


let jumlahSiswaA = 15
let jumlahSiswaB = 25
console.log(jumlahSiswaA) // 15
console.log(jumlahSiswaB) // 25
console.log(jumlahSiswaC) // undifined


let person = {
    name : "Vadia",
    age : 14,
    hobby : painting
}


let number1 = 25
let number2 = 75

console.log(number1 + number2); // ouput : 100


console.log(2 + 2); // Output : 4
console.log(10 - 5); // Output : 5
console.log(3 * 3); // Output : 9
console.log(10 / 5); // Output : 2

console.log(15 % 5); // Output : 0
console.log(14 % 3); // Output : 2

2 > 0 // output 'true'
15 < 5 // output 'false'

let bilangan = 25;

console.log(bilangan === 25); // Output : true (nilai dan tipe data sama)
console.log(bilangan === "25"); // Output : false (nilai sama tetapi tipe data berbeda)



let lapar = true

if (lapar) {
    console.log("Saya akan makan")
} else {
    console.log("Saya tidak makan")
}

// switch case
let sekolah = "rabu";

switch (sekolah) {
  case 'senin'||'selasa':
      console.log("pakai baju putih abu-abu")
      break;
  
  case 'rabu'||'kamis':
      console.log("pakai baju batik")
      break;
  case 'jumat':
      console.log("pakai baju putih muslim")
      break;
  case 'sabtu':
      console.log("pakai baju pramuka")
      break;
  default:
      console.log("pakai baju bebas")
      break;
}

// ternary operator


// For Loop

let angka = 0;
for (angka ; angka <=5; angka++){
    console.log(angka);
}

//while loop

let angka1 = 1;
while (angka1 < 7){ 
  console.log(angka1);
  angka1 ++;
}

// Do While

let angka2 = 6
do {
    console.log(angka2)
    angka2--
} while (angka2 > 0);


/*
1. Foor Loop : merupakan instruksi pengulangan yang dapat kita berikan pada program yang kita kembangkan.
Foor Loop digunakan jika kita tahu seberapa banyak nilai pasti untuk pengulangannya.

2. While Loop : akan menjalankan instruksi pengulangan kondisi bernilai true

3. Do while :*/



// Mendeklarasikan Function

// function luasPersegiPanjang(p,l) {
//     return p * l ;
// }
// console.log(luasPersegiPanjang(2,5)); // Output : 10

// contoh default parameter

function websitePersonal(name="My Website") {
    return "Welcome to " + name;
}
console.log(websitePersonal("Gina Website"));
// output : "Welcome to Gina Website"
console.log(websitePersonal());
// output : "Welcome to My Website"


// Function Helper

function luasPersegiPanjang(p,l) {
    return p * l ;
}

function volumeBalok(p,l,t) {
    return luasPersegiPanjang(p,l) * t;
}

console.log(volumeBalok(2,5,4));


//Arrow Function
// Tidak ada Parameter
const luasLingkaran = () =>{};

// Satu Parameter
const luasLingkaran1 = (paramOne) =>{};

// Dua atau lebih Parameter
const luasLingkaran2 = (paramOne,paramTwo) =>{};


// object

let identitasOrang = {
    nama : "Vadia",
    umur : 14,
    alamat : "seminar"
}

//cek tipe data
console.log(typeof identitasOrang); // Output : object


