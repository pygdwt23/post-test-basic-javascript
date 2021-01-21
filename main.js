//Hitung Luas Segitiga
console.log("Menghitung Luas Segitiga");
alert("Mari menghitung luas segitiga!");
const alas = prompt("Masukkan panjang alas segitiga!");
const tinggi = prompt("Masukkan tinggi segitiga!");
const hasil = alas * 0.5 * tinggi;
alert(`Jadi, luas segitiga adalah ${hasil}!`);
console.log(hasil);
//Hitung Luas Lingkaran
console.log("Menghitung Luas Lingkaran");
alert("Mari menghitung luas lingkaran!");
const jari2 = prompt("masukkan nilai jari-jari!");
const hasil2 = 3.14 * jari2 * jari2;
alert(`Jadi, luas lingkaran adalah ${hasil2}!`);
console.log(hasil2);

//Object
console.log("Membuat Object dengan 5 Key dan Value");
let bio = {
  nama: "Yogo",
  tempatLahir: "Lombok",
  tanggalLahir: "23 September 1995",
  jenisKelamin: "Laki-Laki",
  alamat: {
    dusun: "Telong-Elong",
    desa: "Jerowaru",
    kecamatan: "Jerowaru",
    kabupaten: "Lombok Timur",
    provinsi: "Nusa Tenggara Barat"
  },
  status: "Belum Kawin",
  pekerjaan: "Front-End Web Developer",
  kewarganegaraan: "WNI",
  berlaku: "Seumur Hidup"
};
console.log(bio);
//Array forEach
console.log("Membuat Array 5 item kemudian ditampilkan menggunakan forEach");

const warna = ["Merah","Kuning","Hijau","Biru","Nila","Ungu"]

warna.forEach(function(item) {
  console.log(item)
})