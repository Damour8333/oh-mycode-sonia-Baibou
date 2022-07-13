/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */ 
console.log('connecté!!!')



//localStorage.setItem('clé','valeur');


//je crée  ub stockage sous la forme clé/valeur

localStorage.setItem('nom','Durand');

//je verifie le contenu de localStorage
const stockage = window.localStorage;
console.log('stockage');

//je récupére le contenu du stockage 'nom'
console.log(localStorage.getItem('nom'))
