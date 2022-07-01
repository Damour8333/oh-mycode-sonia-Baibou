// 1/ je selectionne les vignettes 
const vignettes = document.querySelectorAll('.small');
console.log(vignettes);
//je selectionne l'image grand format
const fullImg = document.getElementById('full');
console.log(fullImg);

//je selectionne le bouton 

const btn =document.querySelector('.btn-add');
console.log('je clique sur le bouton btn-add');

//j'initialise la variable panier 
 let panier = 0;

 //je selectionne la div panier-container
 const panierContainer = document.querySelector('.panier-container');



vignettes.forEach(item=>{
    console.log('ce message  apparait pour chaque item du tableau');
    item.addEventListener('click',function(){
        // console.log(item,'vignette cliquée');
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        //j 'attribue la nouvelle url a l'image grand format 
        fullImg.setAttribute('src',imgSource);
    });
    
});
btn.addEventListener('click', function(){
    console.log('bouton cliqué');
    //j'ajoute 1  au courant 
    panier = panier+1;//incrementation
    console.log(panier); 

    //j'affiche le contenu 
    const panierContainer = document.querySelector('.panier-container');
if(panier<2){
    panierContainer.innerText = "Vous avez "+" "+ panier + " "+" un produit dans votre panier";  }else{
    panierContainer.innerText =  "Vous avez "+" "+ panier + " "+" un produits dans votre panier";  
    }
});


//j 'affiche le contenu



