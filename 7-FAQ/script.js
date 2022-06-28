const questions = document.querySelectorAll('.question');
console.log(questions);

questions.forEach(item => {
    console.log('item');
    //chaque élément du tableau est représenté par item 
    //maintenand chaque élément du tableau (item) est soumis a une action au clic

    item.addEventListener('click', function () {
        console.log('item cliqué');
        //je selectionne et stocke la div suivante de l'item cliqué

        const next = item.nextElementSibling;
        console.log(next);
        //en rend visible ou invisible la réponse
        next.classList.toggle('visible');
        icone = item.lastElementChild;
        console.log(icone);
        icone.classList.toggle('fa-chevron-up');
    });

});

//nextElementSibling


 //je cible et stocke l'icone de l'item 



