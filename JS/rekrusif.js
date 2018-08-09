function cetakAngka(n){
    //Cara 1: Fungsi Stop pada rekrusif atau BASE CASE
    if( n === 0){
        return;
    }

    //Cara 2: 
    if(n===0) return;

    //Fungsi pengulangan terus Looping tanpa henti
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

//Faktorial
function faktorial(n){
    if(n===0) return 1;
    return n * faktorial(n-1);
}
// 5! = 5 x 4 x 3 x 2 x 1
faktorial(5);

//Details
function cetakAngka(n){
    for( var i = n; i >=1; i--){
        console.log(i);
    }
}
//--//Details convert to Rekursif
function cetakAngka(n){
    if(n===0) return;
    console.log(n);
    cetakAngka(n-1);
}