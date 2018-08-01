//DOM Traversal 1 class
{/* <body>
    <div class="container">
        <div class="card">
            <img src="./img/aliganteng.jpg" alt="">
            <span class="name">Ali Kurniawan</span>
            <span class="mobileNumber">08123232323</span>
            <span class="close">x</span>
        </div>
    </div>
    <script src="domTraversal.js"></script>
</body> */}

const close = document.querySelector('.close');
const card = document.querySelector('.card');

close.addEventListener('click', function(){
    card.style.display = 'none';
})

//--------------------------------------------------------------------

//Dom Traversal Multi
{/* <body>
    <div class="container">
        <div class="card">
            <img src="./img/aliganteng.jpg" alt="">
            <span class="name">Ali Kurniawan</span>
            <span class="mobileNumber">08123232323</span>
            <span class="close">x</span>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <img src="./img/aliganteng.jpg" alt="">
            <span class="name">Ali Kurniawan</span>
            <span class="mobileNumber">08123232323</span>
            <span class="close">x</span>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <img src="./img/aliganteng.jpg" alt="">
            <span class="name">Ali Kurniawan</span>
            <span class="mobileNumber">08123232323</span>
            <span class="close">x</span>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <img src="./img/aliganteng.jpg" alt="">
            <span class="name">Ali Kurniawan</span>
            <span class="mobileNumber">08123232323</span>
            <span class="close">x</span>
        </div>
    </div>
    <script src="domTraversal.js"></script>
</body> */}

const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

for( let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        card[i].style.display = 'none';
    });
}

//Cara 2 DOM Traversal Parent Element
const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card'); ----> Close This

for( let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        // card[i].style.display = 'none'; -----------> Change 
        close[i].parentElement.style.display = 'none';
    });
} 

// e target ------Function terfokus ke e dengan menambahkan .target -------------------------------------------------------------------
const close = document.querySelectorAll('.close');

for( let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
}

// e foreach --------------------------------------------------------------
const close = document.querySelectorAll('.close');

close.forEach(function(e){
    el.addEventListener('click', function(){
        e.target.parentElement.style.display = 'none';
    })
})

// parentNode  ------------------> node
// parentElement ----------------> element
// nextSibling ------------------> node
// nextElementSibling -----------> element
// previousSibling --------------> node
// previousElementSibling -------> element


// cegah aksi default dengan preventDefault
close.forEach(function(e){
    el.addEventListener('click', function(){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    })
})

// cegah efek bubling agar script diatasnya tidak ikut berjalan
close.forEach(function(e){
    el.addEventListener('click', function(){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation(); //-----> ini method untuk stop bubling
    })
})

const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('ok');
    })
})

// kode yg lebih efektif
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    e.target // --------------------> ini awalnya e.target
})

//Full Script yg di arahkan yaitu containernya
container.addEventListener('click', function(e){
    if( e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    }
})
