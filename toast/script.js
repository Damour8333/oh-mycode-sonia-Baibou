/*PSEUDO-CODE
AU "clic" sur le bouton,
une div est crée et est ajoutée dans la div container-notifications
le nouvel élément disparait au bout de quelques secondes
*/

//je stocke et je selectionne 
//je selectionne et je stocke le bouton
const btn = document.querySelector('.btn');
console.log(btn);
//je selectionne et stocke la div container-notifications

const ctn = document.querySelector('.container-notifications');
console.log(ctn);

//je detecte le clic sur le BOUTON

btn.addEventListener('click',function(){
    console.log('bouton cliqué');
    //je cree un element 

 const notification = document.createElement('div');
 console.log(notification);

 //je donne un style a la div 
 notification.classList.add('toast');
 //j'insére du contenu texte

 notification.innerText = "Votre fichier est bien enregistré !";
 console.log(notification);


 //j'accroche la div a un élément dans la page

 //elementParent.appendChild(elementEnfant)
 //j'accroche notifications a lélement ctn

 ctn.appendChild(notification);

 setTimeout(function(){
    notification.remove();
 },2000)
});

