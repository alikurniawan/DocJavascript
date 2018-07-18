const a = document.getElementById('id');
const b = document.getElementsByTagName('h1')[0];
const c = document.querySelector('section#a a');

a.innerHTML = 'Ali Kurniawan';
a.style.color = 'blue';
a.setAttribute('class', 'satu'); //Nambahin Attribute di Element
a.getAttribute('href'); //tampilin attribute elemen
a.removeAttribute('href'); //Buang

c.classList.add();
c.classList.remove();
c.classList.toggle();
c.classList.item();
c.classList.contain();
