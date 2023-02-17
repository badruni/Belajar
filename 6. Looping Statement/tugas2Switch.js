let n = -1

switch(true){
  case (n >= 0 && n < 10 ) :
  console.log('SATUAN')
  break
  case (n >= 10 && n < 100) :
  console.log('PULUHAN')
  break
  case (n >= 100 && n < 1000) :
  console.log('RATUSAN')
  break
  case (n >= 1000 && n < 10000) :
  console.log('RIBUAN')
  break
  case (n >= 10000 && n < 100000) :
  console.log('PULUHAN RIBU')
  break
  case (n >= 100000 && n < 1000000) :
  console.log('RATUSAN RIBU')
  break
  case (n >= 1000000 && n < 10000000) :
  console.log('JUTAAN')
  break
  case (n >= 10000000 && n < 100000000) :
  console.log('PULUHAN JUTA')
  break
  case (n >= 100000000 && n < 1000000000) :
  console.log('RATUSAN JUTA')
  break
  case (n >= 1000000000 && n < 10000000000) :
  console.log('MILYARAN')
  break
  case (n >= 10000000000 && n < 100000000000) :
  console.log('PULUHAN MILYAR')
  break
  case (n >= 100000000000 && n < 1000000000000) :
  console.log('RATUSAN MILYAR')
  break
  case (n >= 1000000000000 && n < 10000000000000) :
  console.log('TRILIUN')
  break
  case (n >= 1000000000000) :
  console.log('BUANYAK BGT')
  break
  default:
  console.log('Input Tidak Valid')
  }