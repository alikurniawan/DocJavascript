document.createElement();
document.createNode();
node.appendChild();
node.insertBefore();
parentNode.removeChild();
parentNode.replaceChild();

//buat ini --- > <p>Paragraf Baru</p>
const pBaru = document.createElement('p'); //membuat Element baru
const textBaru = document.createTextNode('Paragraf Baru'); //Bikin baru Text Paragraf
pBaru.appendChild(textBaru); //Masukkin 'Paragraf Baru ke elemen p' jadi <p>Paragraf Baru</p>

//Simpan dan tampilkan hasilnya ke web
const sectionA = document.getElementById('a'); //Tangkap Element ber id a
sectionA.appendChild(pBaru); //Masukkan ke akhir dari element

//-----------------------------------------------------------------------
const liBaru = document.createElement('li'); //Buat elemen li dulu
const teksBaru = document.createTextNode('Item Baru'); //buat text nya
liBaru.appendChild(teksBaru); //Masukkan text ke dalam elemen li

const ul = document.querySelector('section#b ul'); //Pilih ul di dalam section class b
const li2 = ul.querySelector('li:nth-child(2)'); //Pilih Lokasi di elemen li nomer 2

//Untuk const li2 bisa juga dengan cara :
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2); //Memasukkan save --> elemen liBaru dengan lokasi sebelum li2
