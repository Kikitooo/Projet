//deux objets :
let menuMobile = document.querySelector('#menuMobile');
let nav = document.querySelector('nav');

// quand je clique sur le menuMobile
menuMobile.addEventListener('click', function()
{
    //je dois voir la nav ou la cacher...
    // bascule entre le display block / none
    // bascule nav / .helloNav
    nav.classList.toggle('helloNav');
});

console.log(menuMobile);
