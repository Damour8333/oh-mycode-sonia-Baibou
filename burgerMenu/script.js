//je selectione et je stocke
//l'icone burger

const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

//la div modal 

const modal = document.querySelector('.modal');
console.log(modal);


//je soumets l'icone a un clic 

icone.addEventListener('click',function(){
    console.log("icone cliqué");
    modal.classList.toggle('change-modal');
});

//icone.classList.toggle('fa-times')