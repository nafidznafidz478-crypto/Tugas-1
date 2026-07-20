const namaPelanggan = "Budi";
const umurPelanggan = 20;
let daftarHargaBarang= [12000, 15000, 8000, 5000];

let totalBelanja = 0;

for (let i= 0; i < daftarHargaBarang.length; i++){
    totalBelanja += daftarHargaBarang[i];
}

if (totalBelanja> 30000){
    console.log("Selamat! Anda mendapatkan diskon.");

}else{
    console.log("Belanja lagi agar mendapat diskon.")
}

console.log("DATA PELANGGAN & BELANJA");
console.log("Nama Pelanggan :", namaPelanggan);
console.log("Umur Pelanggan :", umurPelanggan);
console.log("Daftar Harga Barang :", daftarHargaBarang);
console.log("Total Belanja :", totalBelanja);
