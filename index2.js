// for(angkaAwal <= beroperasiBaik; angkaAwal <= jumlahAngkot; angkaAwal++){
//   console.log('Tidak Beroperasi Baik' + angkaAwal + 'kali');
// }

let angkaAwal = 1;
let beroperasiBaik = 3;
let jumlahAngkot = 5;

for(angkaAwal; angkaAwal <= jumlahAngkot;  angkaAwal++){
  if(angkaAwal <= 2){
    console.log('Angkot baik' + angkaAwal + 'Kali');
  }
  else if(angkaAwal === 3 || angkaAwal === 4){
    console.log('Lembur' + angkaAwal + 'Kali');
  }
  else {
    {
      console.log('Tidak beroperasi' + angkaAwal + 'Kali');
    }
  }
}
