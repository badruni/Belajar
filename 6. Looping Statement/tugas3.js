//menentukan variable
let nama = "KUNCIE"
const numRows = 7;//19999999
const ulang = nama.repeat(numRows);
let splitChar = ulang.split("")
//print total input
console.log("Input :"+numRows);
  for (let i = 0; i <= numRows-1; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += splitChar[j] + " ";
    }
    //print hasil
    console.log(row);
  }