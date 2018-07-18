const a = document.getElementById('id');
const b = document.getElementsByTagName('h1')[0];
const c = document.querySelector('section#a a');

a.innerHTML = 'Ali Kurniawan';
a.style.color = 'blue';
a.setAttribute('class', 'satu'); //Nambahin Attribute di Element
a.getAttribute('href'); //tampilin attribute elemen
a.removeAttribute('href'); //Buang

c.classList.add('label'); //Nambahin class Label didalam class <p class="satu lael" >
c.classList.remove('label');
c.classList.toggle('label'); //Kalau udah ada kelas label dibiarin, kalau belum ditambahain
c.classList.item(2); //Mencari urutan nomer 2 name class didalam class
c.classList.contains('dua'); //adakah class name dua ? #Nanya dia jawabnya true or false
c.classList.replace('dua', 'tiga'); //Ganti nama yg udah ada
