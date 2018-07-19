document.body.addEventListener('mousemove', function(event){
  //posisi mouse Horizontal lurus ke kanan sumbu X
  console.log(event.clientX);

  //posisi mouse Vertikal lurus ke atas sumbu Y
  console.log(event.clientY);

  //Mengetahui lebar Width Windows Broswer
  console.log(window.innerWidth);

  //Full
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const y Pos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)' ;
})

//Jangan lupa di CSS buat :
// html, body {height: 100%; }
