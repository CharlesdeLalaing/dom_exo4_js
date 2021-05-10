// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de récupération de contenu text, mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du second h1
// ### 2. Affiche le contenu textuel du dernier li
// ### 3. Affiche le contenu textuel du premier p en majuscule
// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, bonus : affiche chaque li en majuscule

//exo1
let textSecondh1 = document.getElementsByTagName('h1')[1];
console.log(textSecondh1.innerText);

//exo2
let textDernierLi = document.getElementsByTagName('li')[3];
console.log(textDernierLi.innerText);

//exo3
let textPremierP = document.getElementsByTagName('p')[0];
console.log(textPremierP.innerText.toUpperCase());

//exo4
let toutLi = document.getElementsByTagName('li');
Array.prototype.forEach.call(toutLi, function(el) {
    // Do stuff here
    console.log(el.innerText.toUpperCase());
});
