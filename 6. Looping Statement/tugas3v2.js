//menentukan variable
let nama = "KUNCIE"
const numRows = 7;
//looping variable nama
for (let z = 0; z < numRows; z++) {
  nama += nama;
}
//print total input
console.log("Input :"+numRows);
//looping row
for (let i = 0; i <= numRows-1; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
      row += nama[j] + " ";
  }
  //print hasil
  console.log(row);
}