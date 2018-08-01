//Perbedaan Event Handler dan AdeventListener
//Please open the event documentations on :
https://developer.mozilla.org/en-US/docs/Web/events

const p3 = document.querySelector('.p3');

//eventHandler
p3.onclick = function(){   //onclick 1
  p3.style.backgroundColor = 'blue'; //tertimpa oleh onclick yang ke 2
}

p3.onclick = function(){   //onclick 2
  p3.style.color = 'red';  //Hanya ini yang dijalankan pada event Handler
}


//addEventListener ---> kedua function akan dijalankan bersamaan
p3.addEventListener('click', function(){
  p3.style.backgroundColor = 'blue';
});

p3.addEventListener('click', function(){
  p3.style.color = 'red';
});
