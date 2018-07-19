//Menghasilkan Nilai acak Math antara 0 sd 1
const x = Math.random();
const y = Math.round();
const z = Math.floor(); //Pemulatan kebawah
const ab = Math.ceil(); //Langit2 --> Pembulatan ke Atas

//Merubah warna random
const r = Math.round(Math.random() * 255 + 1);
const g = Math.round(Math.random() * 255 + 1);
const b = Math.round(Math.random() * 255 + 1);

//awal penulisan rgb ---> rgb(100,100,100);
document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'

//------------------------------------------------------------------------------------//
