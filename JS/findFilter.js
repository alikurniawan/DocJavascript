//Filter --> Mengembalikan banyak Array
var angka3 = [1,2,10,5,20,3,6,8,4]

var angkaii = angka3.filter(function(x){
    return x > 5;
})

console.log(angkaii.join('-'));
//result --> 10 - 20 - 6 - 8 --> Multi Angka atau banyak Array


//---------------------------------------------------------------


//Find --> hanya mengembalikan satu Array
var angka3 = [1,2,10,5,20,3,6,8,4]

var angkaii = angka3.find(function(x){
    return x > 5;
})

console.log(angkaii);
//result --> 10  --> hanya satu angka array saja
