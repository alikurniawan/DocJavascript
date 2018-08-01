const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(){
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src;  //src menimpa sumber Image yg ada
        jumbo.classList.add('fade');

        setTimeout(function(){
            jumbo.classList.remove('fade'); //fade adalah nama kelas di CSS untuk remove class di dalam element
        }, 500);

        e.target.classList.add('active'); //Active adalah nama class di CSS

    }
})