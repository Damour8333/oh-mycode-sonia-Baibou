//je stocke et je selectionne  la DIV  modal-container 

const modal = document.querySelector('.modal-container');
console.log(modal);

//je selectionne le bouton
const btn =document.querySelector('.btn-success');
console.log('btn');

//je selectionne le code 
const code = document.querySelector('.code');
console.log(code);

const icone = document.querySelector('.fa-times');
console.log(icone);


//je detecte le defilement
window.addEventListener('scroll',displayModal)

function displayModal(){
    console.log('defilement détecté!');

    let hauteur = document.documentElement.scrollTop;
console.log(hauteur,'nombre de pixels parcourus depuis le haut de la page ');

    if(hauteur > 400){
        console.log('Affichage de la modale');
        modal.style.display="flex";

    };
};



btn.addEventListener('click',function(){
    console.log('bouton cliqué');
    code.style.display = "block";
    btn.style.display = "none";
});

icone.addEventListener('click',function(){
    console.log('icone cliquée');
    //je rendsla modale invisible 
    modal.style.display="none";
    //j 'annule l'évenement
    window.removeEventListener('scroll',displayModal)
});






