function getDarkBGColors(){
    return {backgroundColor : "#414141",color : "#ffff"}
}

function getLightBGColors(){
    return {backgroundColor : "#d3d9f3",color : "#414141"}
}

function getPlan() {
    return [
        {name : "presentation", title : "A propos"}, 
        {name : "skills", title : "Competences"}, 
        {name : "projetsCapsule", title : "Projets de formation"},
        {name : "autoformation", title : "Projets auto-formation"},
        {name : "projetsPerso", title : "Projets personnels"},
        {name : "contact", title : "Contact"},
      ]
}



// fonction permettant renvoyer un objet reprenant les clés name du plan  et initialisant les informations d'animation
function initStartTranslation(){
    const objToReturn = {};

    for(let item of getPlan()){
        objToReturn[item.name] = {canStart : true, starting : false};
    }
    return objToReturn;
}

// fonction permettant de définir un projet
function defProject(title, message, skillsFront, skillsBack, image, link, gitFront, gitBack, animateCard){
    return {title , message, skillsFront, skillsBack, image, link, gitFront, gitBack, animateCard}
}

function defProjectCapsule(){
    const arrayToReturn =[];
    // définition des messages
    const messageTicket = "1er Hackathon de la formation : à partir d'une maquette sous forme de vidéo, nous avons codé de zéro un site de réservation de billets";
    const messageWordle = "Travailler les notions apprises en HTML et CSS pour coder de zéro une reproduction du jeu à partir de consignes et d'une vidéo";
    const messageTweet = "2ème Hackathon de la formation : à partir d'une maquette sous forme de vidéo, nous avons codé de zéro une version simplifiée de tweeteur";
    const animateCard = false;

    arrayToReturn.push(defProject("TicketHack", messageTicket, ["HTML", "CSS","JavaScript", "DOM", "Node.js"], ["Node.js", "Express","MongoDB"], "TicketHack.png", 
                                 "https://ticket-hack-perso-frontend.vercel.app/", "https://github.com/Grometto-N/ticketHackPerso-frontend"
                                 , "https://github.com/Grometto-N/ticketHackPerso-backend",animateCard) );

    arrayToReturn.push(defProject("Wordle", messageWordle, ["HTML", "CSS", "DOM", "JavaScript", "Node.js"], ["Node.js", "Express","MongoDB"], "WordleHTML.png", 
                                 "https://wordle-frontend-hazel.vercel.app/", "https://github.com/Grometto-N/wordle-frontend"
                                 , "https://github.com/Grometto-N/wordle-backend",animateCard)); 
                                 
    arrayToReturn.push(defProject("HackaTweet", messageTweet, ["JavaScript", "React", "CSS", "Next.js","Node.js", "Redux"], ["Node.js", "Express", "MongoDB"], "HackaTweet.png", 
                                 "https://hackatweet-frontend-omega.vercel.app/", "https://github.com/Grometto-N/Hackatweet-Frontend"
                                 , "https://github.com/Grometto-N/Hackatweet-Backend",animateCard)); 
    

    return arrayToReturn;
}

function defAutoFormation(){
    const arrayToReturn =[];

    const messageMorning = "Un projet de formation refait avec TypeScript pour le front-end. Site appelant une API externe pour obtenir des articles, SignIn/SignUP et possibilité de masquer les articles";
    const messageWeatherApp = "Apprentissage autodidacte de Symfony5 en refaisant entièrement un projet de formation. Site appelant une API externe pour obtenir la météo d'une ville saisie. SignIn/SignUP et enregistrement des favoris en BDD";
    const messageMorningSymfony = "Suite de mon auto-formation en créant une API Rest avec Symfony et adaptation du front-end React. SignIn/SignUp avec utilisation de JWT, appel à une API externe pour afficher des articles ";
   const messageCommerce = "Coder un site de e-commerce avec panier, recherche de produit, interface administrateur et compte utilisateur";
    const animateCard = true;

    arrayToReturn.push(defProject("MorningNews TypeScript", messageMorning, ["TypeScript", "React", "CSS", "Next.js","Node.js", "Redux"], ["Node.js", "Express", "MongoDB", "API externe"], "MorningNews.png", 
                                 "https://morningnews-xi.vercel.app/", "https://github.com/Grometto-N/morningnews"
                                 , "https://github.com/Grometto-N/morningnews-backend",animateCard));

    arrayToReturn.push(defProject("WeatherApp", messageWeatherApp, ["HTML", "CSS","TWIG"],["PHP", "MariaDB/MySQL", "API externe", "Symfony 5"], "WeatherApp.png", 
                                 null, "https://github.com/Grometto-N/weatherapp"
                                 , null,animateCard));

    arrayToReturn.push(defProject("MorningNews API Symfony", messageMorningSymfony, ["TypeScript", "React", "CSS", "Next.js", "Redux"],["PHP", "MariaDB/MySQL", "API externe", "Symfony5", "JWT"], "MorningNews2.png", 
                                 null, "https://github.com/Grometto-N/front-morningnews", "https://github.com/Grometto-N/api-morningnews"
                                 ,animateCard));

     arrayToReturn.push(defProject("Site e-commerce", messageCommerce, ["Twig", "Boostrap", "CSS"],["PHP", "MariaDB/MySQL", "Symfony5", "Fixtures"], "Commerce.png", 
                                 null, "https://github.com/Grometto-N/commercial", null,animateCard));

    return arrayToReturn;
}

function defProjectPerso(){
    const arrayToReturn =[];
    // définition des messages
    const messagePortFolio = "Le PortFolio sur lequel vous vous trouvez...";
    const animateCard = false;


    arrayToReturn.push(defProject("PortFolio", messagePortFolio, ["JavaScript", "CSS","React", "Node.js"],[], "Portfolio.png", 
                                 null, "https://github.com/Grometto-N/portfolio-nico"
                                 , null,animateCard));

    return arrayToReturn;
}

module.exports = {getDarkBGColors, getLightBGColors, getPlan , initStartTranslation, defProjectCapsule, defAutoFormation, defProjectPerso};