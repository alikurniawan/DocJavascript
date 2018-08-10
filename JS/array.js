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


//Menampilkan
for(var i=0; i<3; i++){
    console.log(arr[i]); //Result --> Ali Kurniawan Ganteng Sekali
}

//-------------------------------------------------------------------------------------------------
// Array Join --> merubah isi array menjadi string
console.log(arr.join());  //--> Ali, Kurniawan, ganteng, Sekali
console.log(arr.join('-')); //-->Ali-Kurniawan-ganteng-Sekali

//Push and Pop
//1. Push --> menodorong masuk elemen baru di akhir array
console.log(arr.push('mantap')); //-->Ali,Kurniawan,ganteng,sekali,mantap
console.log(arr.push('mantap', 'hebad'));

console.log(arr.pop()); //---> Menghilangkan element array terakhir

//2. Unshift dan shift
console.log(arr.unshift('Bayu')); //--> Menambhakan element baru diawal array
console.log(arr.shift()); //-->Mendelete element awal array

//3. Splice ( Menyambung )
// splice(di index berapa untuk ditempatkannya ElemenBaru, mauDiHapusBerapaElementSetelahnya, TambahElemenBaru1, TambahElementBaru2,....dst)
console.log(arr.splice(2, 0, 'Dany'));
console.log(arr.join('-'));
//result --->Ali-Kurniawan-Dany-ganteng-Sekali 

console.log(arr.splice(2, 2, 'Batman', 'Robin'));
console.log(arr.join('-'));
//result --->Ali-Kurniawan-Batman-Robin-Sekali

//4. Slice (Mengiris Cinta)
//slice(Menghilangkan ke kiri index Awal dipilih, menghilangkan ke kanan index)
var ban = ['aku','sangat','tidak','samaSekali','cinta','kamu'];
console.log(ban.slice(2, 3));
console.log(arr.join('-'));
//result --> tidak-samaSekali