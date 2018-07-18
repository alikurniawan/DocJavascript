document.createElement();
document.createNode();
node.appendChild();
node.insertBefore();
parentNode.removeChild();
parentNode.replaceChild();

//buat ini --- > <p>Paragraf Baru</p>
const pBaru = document.createElement('p'); //membuat Element baru
const textBaru = document.createTextNode('Paragraf Baru'); //Bikin baru Text Paragraf

pBaru.appendChild(textBaru); //Masukkin 'Paragraf Baru ke elemen p'

//Simpan dan tampilkan hasilnya ke web
const sectionA = document.getElementById('a'); //Tangkap Element ber id a
sectionA.appendChild(pBaru); //Masukkan
