//1- je selectionne et je stocke 
console.log('connecté');

const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

const msgError = document.querySelectorAll('.error');

//je fais passer les imformations du HTML vers Javascript 

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('formulaire envoyé');

    //je recupere les valeurs de chacun des inputs
    const prenomValue = prenom.value.trim();
    console.log(prenomValue.length, 'prenom');

    const nomValue = nom.value.trim();
    console.log(nomValue, 'nom');

    const emailValue = email.value.trim();
    console.log(emailValue, "email");

    const messageValue = message.value.trim();
    console.log(messageValue, "message");


    //je recupere les informations  de l'utilisateur

    // if(prenomValue === ""){
    //     console.log('erreur');
    // }else{
    //     console.log('succès');
    // }
    msgError.forEach(error =>{
        error.classList.add('invisible');
    });
//je verifie les imformations de l'utilisateur
    if(prenomValue.length < 2 || prenomValue.length > 10) {
        console.log("erreur prénom");
        prenom.nextElementSibling.classList.remove('invisible')
    }else if(nomValue.length < 3 || nomValue.length > 15) {
       console.log('erreur nom');
       nom.nextElementSibling.classList.remove('invisible')
    }else if (messageValue.length < 10 || messageValue.length > 100){
        console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible');
    }else{
        console.log('succès');
        titre.innerText = "Votre message a bien été envoyé";
        //Suppression du formulaire
        form.remove();

    }
   
   
});



