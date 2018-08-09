
var a = 3;

function ada(){
    b = 4;
    var c = 6;
    console.log(a);
}
ada(); //keluar angka 3 (var a --> diluar function)
console.log(b); //Bisa megakses b tanpa var didalam function
console.log(c); //tidak bisa di akses karena ada var nya

//Baris Script Local suatu function bisa melihat dan mengakses var diluar function
//tetapi sebaliknya tidak, baris script di luar fungsi tidak bisa akses ke dalam fungsi kecuali tanpa deklarasi var

