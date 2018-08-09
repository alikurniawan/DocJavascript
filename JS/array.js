var myFunc =function(){
    alert('Hello World');
}

var myArr = ['text', 2, false, myFunc,[4,5,6]];

//Cara Akses angka 5 yg array didalam array
console.log(myArr[4][1]); //result ---> 5


//Array 2: Input Delete View ----------------------------

//Menambah isi array
var arr = [];

arr[0] = 'Ali';
arr[1] = 'Kurniawan';
arr[2] = 'ganteng';
arr[3] = 'sekali';

//Jika di Console Log ---> result ---> var arr = ['Ali','Kurniawan','ganteng','sekali'];
console.log(arr);

//Delete isi Array
arr[3] = undefined; //---> hapus


//Menampilakan
for(var i=0; i<3; i++){
    console.log(arr[i]); //Result --> Ali Kurniawan Ganteng Sekali
}
