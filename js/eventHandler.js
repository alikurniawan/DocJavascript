//ini untuk eventHandler.html
const p = document.querySelector('.eventH');

function ubahWarna() {
  p.style.backgroundColor = 'blue';
}

//bisa juga : -------------------------------------//
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//AdeventListener -------------------------------//
const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function()); //Step Penulisan pertama
p4.addEventListener('click', function(){
  alert('OK');
});
