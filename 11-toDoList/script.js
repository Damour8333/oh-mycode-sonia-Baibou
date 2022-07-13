console.log('connecté');


// je selectionne et je stocke




const form = document.getElementById('form');
console.log(form);
const todo = document.getElementById('todo');
console.log(todo);
const listItems = document.querySelector('.list-items');
console.log(listItems);
//je recupere la valeur de l'input
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('bouton cliqué');
    const todoValue = todo.value;
    console.log(todoValue);
    //je crée l'élément
    let item = `
                <div class="item">
               <p>${todoValue}</p>
                <button class="btn-delete">
                <i class=" fas fa-trash-alt"></i>  
                </button>
                <button class="btn-archive">
                <i class="<p>${todoValue}</p>
                fas fa-check-circle"></i>
                </button>
                </div>
    `;
//
//je place item dans listItem

//listItems.innerHTML =item;

//je place tous les items dans listItems
listItems.innerHTML+=item;

//je selectionne tous les boutons btn-delete existants dans la page 

const btnDelete = document.querySelectorAll('.btn-delete');
console.log(btnDelete);

btnDelete.forEach(i => {
    console.log('btn-delete');

    //au clic sur bouton supprimer
    i.addEventListener('click',function(){
        console.log('btn-delete cliqué');
        //J'enléve l'élément parent 
        i.parentElement.remove();
            }); 
     })//fermeture de btnDelete.forEach


 //je selectionne tous les boutonsboutons btn-archive existants dans la page 
     const btnArchive = document.querySelectorAll('.btn-archive');
     console.log(btnArchive);

     btnArchive.forEach(i => {
        console.log('btn-archive');
        i.addEventListener('click',function(){
            //je cible l'élément parent de i
            //const parent =i.parentElement;
            //j'agis sur la DIV parent (class item)
            i.parentElement.classList.toggle('done');
                }); 

     });
form.reset();
});//  fermeture de form.addEventListener
