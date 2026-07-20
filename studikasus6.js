const umur = [8, 13, 17, 20, 25, 11];

for (let i = 0; i < umur.length; i++) {
    if (umur[i] >= 17) {
        console.log(`Umur ${umur[i]}: Boleh Masuk`);
    } else {
        console.log(`Umur ${umur[i]}: Tidak Boleh Masuk`);
    }
}