/ on capte toutes les images
let touteslesimages = document.querySelectorAll('main img');


for(let i=0; i<touteslesimages.length; i++){
    touteslesimages[i].addEventListener('click', function(){
let src = this.getAttribute('src');
let image = document.createElement('img');


image.setAttribute('src', src);

let  div = document.createElement('div');

div.setAttribute('id', 'overlay');

let close = document.createElement('img')
close.setAttribute('src', 'images/croix.svg');
close.setAttribute('id', 'close');
div.appendChild(close);

close.addEventListener('click', function(){

document.body.removeChild(div);
});

div.appendChild(image);
document.body.appendChild(div);
    });
}
