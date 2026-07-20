const stok = [12, 0, 5, 8, 0, 20];

let habis = 0;
let tersedia = 0;

for (let i = 0; i < stok.length; i++) {
    if (stok[i] === 0) {
        console.log(`Barang ke-${i + 1} : ${stok[i]} -> Barang Habis`);
        habis++;
    } else {
        console.log(`Barang ke-${i + 1} : ${stok[i]} -> Stok Tersedia`);
        tersedia++;
    }
}

console.log("\nJumlah barang habis : " + habis);
console.log("Jumlah barang tersedia : " + tersedia);