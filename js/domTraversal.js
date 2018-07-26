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

const close = document.querySelector('.close');
const card = document.querySelector('.card');

for( let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        card[i].style.display = 'none';
    });
}