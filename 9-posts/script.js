//je selectionne et je stocke la div posts 

const postsContainer = document.querySelector('.posts');
console.log(postsContainer);

const utilisateur = {
    nom : "Doe",
    prenom : "John",
    service: "marketing",
}
console.log(utilisateur);

const post = {
    titre : "SEO, les bonnes pratiques",
    hashtag: "#SEO",
    extrait :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque iusto ducimus atque rem vero consequuntur dicta labore aliquid obcaecati, delectus temporibus? Cum quisquam molestiae cumque, repudiandae ut deserunt sed ex exercitationem harum minima aliquam? Quia quo esse ullam eveniet aspernatur inventore, sapiente, fuga nostrum quisquam vel quaerat voluptatem necessitatibus."
}
console.log(post);
// const valeur =objet.propriete;

//j'accede à la valeur de la propriété titre 

const t= post.titre;
console.log(t);

//initialisation d'un tableau (array)
const posts =[
    {
        titre : "SEO, les bonnes pratiques",
        hashtag: "#SEO",
        extrait :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque iusto ducimus atque rem vero consequuntur dicta labore aliquid obcaecati, delectus temporibus? Cum quisquam molestiae cumque, repudiandae ut deserunt sed ex exercitationem harum minima aliquam? Quia quo esse ullam eveniet aspernatur inventore, sapiente, fuga nostrum quisquam vel quaerat voluptatem necessitatibus."
    },
    {
        titre : "Bien debuter en referencement payant",
        hashtag: "#reférencement",
        extrait :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque iusto ducimus atque rem vero consequuntur dicta labore aliquid obcaecati, delectus temporibus? Cum quisquam molestiae cumque, repudiandae ut deserunt sed ex exercitationem harum minima aliquam? Quia quo esse ullam eveniet aspernatur inventore, sapiente, fuga nostrum quisquam vel quaerat voluptatem necessitatibus."
    },
    {
        titre : "Content Marketing, les bons arguments",
        hashtag: "#contentMarketing",
        extrait :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque iusto ducimus atque rem vero consequuntur dicta labore aliquid obcaecati, delectus temporibus? Cum quisquam molestiae cumque, repudiandae ut deserunt sed ex exercitationem harum minima aliquam? Quia quo esse ullam eveniet aspernatur inventore, sapiente, fuga nostrum quisquam vel quaerat voluptatem necessitatibus."
    }
];
console.log(posts);

//je passe en revue chaque élément du tableau 
posts.forEach(item =>{
    //console.log(item +"coucou");
    //Creation d'une DIV avec template Strings
    const article = `
    <div class="post">
        <div class="post-titre">${item.titre}</div>
        <div class="post-extrait">${item.extrait}</div>
        <div class="post-hashtag">${item.hashtag}</div>
    </div>

    `
    console.log(article);
    //Ajout de l'article dans la DIV dédiéé postsContainer
    postsContainer.innerHTML += article;
});





