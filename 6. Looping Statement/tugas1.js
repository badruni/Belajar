let nama = "Muhamad Badruni"
let splitChar = nama.split("")// membagi variable nama menjadi beberapa karakter
let hitungChar = []
// menghitung karakter
for (let i = 0; i < splitChar.length; i++) {
  let jumlah = splitChar[i]
  hitungChar[jumlah] = (hitungChar[jumlah] || 0) + 1
}
// print hasil hitung
for (let jumlah in hitungChar) {
  // console.log(jumlah)
  console.log(jumlah + " = " + hitungChar[jumlah])
}
