//Cara manggil <input type="slider" name="sMerah" min="1" max="255"/>
//<input type="slider" name="sMerah" min="1" max="255"/>
//<input type="slider" name="sHijau" min="1" max="255"/>
//<input type="slider" name="sBiru" min="1" max="255"/>

const sMerah = document.querySelector('input[name=sMerah]');
const sMerah = document.querySelector('input[name=sHijau]');
const sMerah = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sBiru.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
sHijau.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
