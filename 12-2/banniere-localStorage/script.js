//je selectionne  et je stocke
//bouton.btn.btn-success

const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

// DIV COOKIES

const cookies = document.querySelector('.cookies');
console.log(cookies);

btnSuccess.addEventListener('click',function(){
    console.log('bouton cliqué !');
    cookies.style.opacity = "0";
    //Je crée le localStorage avec la valeur 'oui';
    localStorage.setItem('banniere','oui');

    //Je stocke la valeur du localStorage avec la valeur
    let valeurCle = localStorage.getItem('banniere');
    console.log(valeurCle,"valeur de la clé");

    //je déclare la fonction 
    function check(){
        console.log('déclenché');

    }
    check();
    if (valeurCle) {
        console.log("stockage existe");
        cookies.remove();
        
    }else{
        console.log("stockage n'existe pas");
    }
});