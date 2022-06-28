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
});