/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */ 
console.log('connecté!!!')
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response =>response.json())
// .then(data => console.log(data,"data"))
const item = document.querySelector('.banniere-titre');
console.log(item);
async function enAttente(){
    try{

        const reponseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1');
         //code a executer aprés réception de la réponse 
         //conversion de la réponse au format Javascript
         const reponseJS = await reponseJSON.json(); 
         console.log(reponseJS,'objet Javascript');
         item.innerHTML = `<h1>${reponseJS.id} - ${reponseJS.title}</h1>
                          <p>Terminé: ${reponseJS.completed}</p>
         `
    }
    catch(error){
        console.log(error,"erreur");
    }

}//fermeture de attente


enAttente();
