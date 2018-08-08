// Keterangan
function test(/*Parameter*/){
  return /*Parameter*/;
}

//Stage 2
function tambah(){
  return arguments;
}

var coba = tambah(5, 10, 20, 'hi', false);

//-----------------------------------------------------------


function tambah(){
    var hasil = 0;
  
    for(var i = 0; i < arguments.length; i++){
      hasil += arguments[i];
    }
    return hasil;
  }
  
  var coba = tambah(1,2,3,4,5) //Diisikan berapapun Argument dapat dengan otomatis terjumlah
  console.log(coba);