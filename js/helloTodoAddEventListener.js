//ini untuk eventHandler.html

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){

  //Panggil Parent nya dulu
  const ul = document.querySelector('section#b ul');

  //Buat Element nya
  const liBaru = document.createElement('li');
  const teksBaru = document.createTextNode('Item Baru'); //Masukkan text elemennya

  //Proses
  liBaru.appendChild(teksBaru);
  ul.appendChild(liBaru);

});
