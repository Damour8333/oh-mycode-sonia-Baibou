/* 1ere ligne js */
/*ce ligne est un outil de débogage ouvrir la console avec l inspecteur */ 
console.log('connecté!!!');

let heure = 20;

if (heure < 12){
    console.log("C'est bientot midi")
}else if (heure < 18){
    console.log('c\'est  l\'apres midi ')
}else{
    console.log('c\'est la soirée');
}

//switch (heure

let consommable = "chocolat";

switch (consommable){
    case "courgette":
    case "carotte":
    case "pomme de terre":
        console.log('Ceci est un légume');
        break;
    case "banane":
        console.log("Ceci est un fruit");
        break;
        default:
            console.log('Ceci n\'est ni un fruit ni un légume');
}

//ET OU

// let gareDeDepart ="Valenciennes";
// let gareDarrivee = prompt("Ou souhaitez vous allez ?")||"Gare du Nord";
// let chauffeur ="jef";

// if ((gareDeDepart != ""|| gareDarrivee !="")&& chauffeur != ""){
//     alert('le train va demarrer a destination de '+gareDarrivee+'.');
// }else{
//     alert("le train ne pas démarrer");
// }
 //conditions ternaires

 let x = 5;
 if (x>3){
    console.log('x est superieur  a trois');
 }else{
    console.log('x est inferieur a trois')
 }

 x>3 ? console.log('x est superieur a trois ') : console.log('x est inferieur a trois');

 let i = 0;
 while(i<10){
    i++;
    console.log(i);
 }

 let j = 0;
 do{
    total=j++;
    console.log(total);

 }while(j<11);
 

 