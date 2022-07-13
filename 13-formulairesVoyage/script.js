/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */ 
console.log('connecté!!!');

//le formulaire

const form =document.getElementById('form');

//les champs input text et input date

const pays = document.getElementById('pays');
const start=document.getElementById('start');
const end=document.getElementById('end');

form.addEventListener('submit',function(e){
    //empecher le rafraichissement de la page 
    e.preventDefault();
    //console.log('formulaire validé');

    //je stocke les valeurs dans l'objet choix 

    const choix = {
        pays : pays.value,
        start : start.value,
        end: end.value
    };
    console.log(choix,"choix");
});//fermeture  form.addEventListener



