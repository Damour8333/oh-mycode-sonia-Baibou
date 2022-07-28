/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */
console.log('connecté!!!');

//le formulaire

const form = document.getElementById('form');

//les champs input text et input date

const pays = document.getElementById('pays');
const start = document.getElementById('start');
const end = document.getElementById('end');
const listeResultats = document.querySelector('.liste-resultats');

//base de données
const voyages = [
    {
        pays: "borabora",
        prix: 1790,
        voyageurs: 4
    },
    {
        pays: "bahamas",
        prix: 1790,
        voyageurs: 4
    },
    {
        pays: "bahamas",
        prix: 1790,
        voyageurs: 2
    },
    {
        pays: "tahiti",
        prix: 1790,
        voyageurs: 4
    }
]//ici la fin du tableau
console.log(voyages, "tableau voyages");

form.addEventListener('submit', function (e) {
    //empecher le rafraichissement de la page 
    e.preventDefault();
    console.log('formulaire validé');

    //je stocke les valeurs dans l'objet choix 

    const choix = {
        pays: pays.value,
        start: start.value,
        end: end.value
    };
    console.log(choix,"choix");
    //je transforme l'objet en chaine de caracteres 
    const choixString = JSON.stringify(choix);
    //console.log(choixString);


    //l'objet dans le localStorage
    localStorage.setItem('details', choixString);

    //on rafraichit la page pour faire apparaitre les informations 

    window.location.href = window.location.href;

});//fermeture  form.addEventListener

function displayDetails() {
    //console.log('fonction déclenché');
    const choixObjet = JSON.parse(localStorage.getItem('details'));
    console.log(choixObjet, "choixObjet");
    //pré-remplir les champs de l'objet
    pays.value = choixObjet.pays;
    start.value = choixObjet.start;
    end.value = choixObjet.end;

    //filter en fonction du pays enregistré
    const resultats = voyages.filter((voyage) => voyage.pays === pays.value);
    console.log(resultats, "resultats");

    //boucle dans le tableau

    resultats.forEach(resultat => {
        const item = `
        <div class="item">
            <p class="item-pays">
            ${resultat.pays}
            </p>
            <p >
           offre pour ${resultat.voyageurs} personnes
            </p>

            <p>
            Prix pour vol inclus  ${resultat.prix}€
            </p>
            <button>Go ! </button>
        </div>
        `
        //je place cette DIV dans la page
        listeResultats.innerHTML += item;
    });//fermeture de la boucle
}//fermeture de la fonction displayDetails()
displayDetails();

//objet : emsemble de propriété correspandant a une seule variable

//tableau : liste d'éléments attaché a une variable



