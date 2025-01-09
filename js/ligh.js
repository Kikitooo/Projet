// on capte toutes les images
let touteslesimages = document.querySelectorAll('main img');

//pour chaque images => BOUCLE

for(let i=0; i<touteslesimages.length; i++){
    touteslesimages[i].addEventListener('click', function(){
    //je récupère l'attribut SRC de l'image sur laquelle je vient de cliquer
let src = this.getAttribute('src');
    //je crée une nouvelle image dans le document
let image = document.createElement('img');

//je lui donne le src que je viens de capter

image.setAttribute('src', src);

    //je crée une div pour l'overlay
let  div = document.createElement('div');

    //je lui donne une id 
div.setAttribute('id', 'overlay');

//crée une image pour la croix de fermeture
let close = document.createElement('img')
close.setAttribute('src', 'images/croix.svg');
//lui ajouter une id
close.setAttribute('id', 'close');
//l'ajouter à la dive
div.appendChild(close);

//quand on clique sur la croix
close.addEventListener('click', function(){

//on enlève la div
document.body.removeChild(div);
});

    //je place l'image dans la div
div.appendChild(image);
    //je place la div dans le body
document.body.appendChild(div);
    });
}
