let menuMobile = document.querySelector('#menuMobile');
let nav = document.querySelector('nav');

menuMobile.addEventListener('click', function()
{
    nav.classList.toggle('helloNav');
});

console.log(menuMobile);
