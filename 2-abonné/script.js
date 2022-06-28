//je selectionne et je stocke
//Icone contient le premier élément <i> trouvé dans le code 

const icone = document.querySelector('i');
console.log(icone);
const btnButton = document.querySelector('.btn ');
console.log(btnButton);


//je soumets l îcone à une action au clic 
 icone.addEventListener('click',function(){
    console.log('icone cliquée');
    icone.classList.toggle('fa-smile-wink')
    icone.classList.toggle('happy');
   // |élement concerné|accés aux classes| fait alterner| classe à ajouter ou a enlever


 });
//-----------------------------------------------------------------------------------------------------------------------

//button

//je soumets le boutton a une action clic

btnButton.addEventListener('click',function(){
    console.log('bouton cliqué');

    //a chaque clic on alterne le style 
    btnButton.classList.toggle('abonne');
    //btnButton.innerText = "Abonné";
   // on verifie le texte du bouton action
    if(btnButton.innerText === "Abonné"){
        //action a réaliser si condition est vraie 
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else');
        //Action à réaliser si conditions fausse 
        btnButton.innerText = "Abonné";
    }
});





