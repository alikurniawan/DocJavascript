var angka = [1, 2, 3, 4, 5, 6, 7, 8];

//Loopingan For Metoda Lama
for(var i = 0; i < angka.length; i++){
    console.log(angka[i]);
}

//Convert to :
angka.forEach(function(e){
    console.log(e);
})

//Akan menghasilkan hasil yg sama yaitu Loopingan 1 sd 8

//------------------------------------------------------------
//Index pada forEach
var nama = ['Ali','Kurniawan'];
nama.forEach(function(e, i){
    console.log('Orang Pertama Bernama' + i + e);
})