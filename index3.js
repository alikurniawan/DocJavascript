// hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
let mask = prompt('Masukkan Pilihan');

var comp = Math.random();


if(comp < 0.34){
  comp = 'Gajah';
}else if(comp >= 0.3 && comp < 0.6){
  comp = 'Semut';
}else {
  comp = 'orang';
}

if(mask == comp){
  
}
