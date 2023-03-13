function getPlan() {
    return [
        {name : "presentation", title : "A propos"}, 
        {name : "skills", title : "Competences"}, 
        {name : "projetsCapsule", title : "Projets de formation"},
        {name : "projetsPerso", title : "Projets personnels"},
        {name : "contact", title : "Contact"},
      ]
}

// fonction permettant de renvoyer un objet reprenant les clés name du plan et initialisant la hauteur à 0
function initComponentHeight(){
    const objToReturn = {Header : 0, image : 0};

    for(let item of getPlan()){
        objToReturn[item.name] = 0;
    }
    return objToReturn;
}

// fonction permettant de renvoyer un objet reprenant les clés name du plan et initialisant la hauteur à 0
function initTriggerLevel(){
    const objToReturn = {};

    for(let item of getPlan()){
        objToReturn[item.name] = 0;
    }
    return objToReturn;
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
function defProject(title, message, skillsFront, skillsBack, image, link, gitFront, gitBack){
    return {title , message, skillsFront, skillsBack, image, link, gitFront, gitBack}
}

function defProjectCapsule(){
    const arrayToRetrun =[];
    // définition des messages
    const messageTicket = "1er Hackathon de la formation : à partir d'une maquette sous forme de vidéo, nous avons codé de zéro un site de réservation de billets";
    const messageWordle = "Travailler les notions apprises en HTML et CSS pour coder de zéro une reproduction du jeu à partir de consignes et d'une vidéo";
    const messageTweet = "2ème Hackathon de la formation : à partir d'une maquette sous forme de vidéo, nous avons codé de zéro une version simplifiée de tweeteur";
    const messageMorning = "Un projet de formation refait de zéro, mais en utilisant TypeScript pour le front-end";

    arrayToRetrun.push(defProject("TicketHack", messageTicket, ["HTML", "CSS","JavaScript", "DOM", "Node.js"], ["Node.js", "Express","MongoDB"], "TicketHack.png", 
                                 "https://ticket-hack-perso-frontend.vercel.app/", "https://github.com/Grometto-N/ticketHackPerso-frontend"
                                 , "https://github.com/Grometto-N/ticketHackPerso-backend"));

    arrayToRetrun.push(defProject("Wordle", messageWordle, ["HTML", "CSS", "DOM", "JavaScript", "Node.js"], ["Node.js", "Express","MongoDB"], "WordleHTML.png", 
                                 "https://wordle-frontend-hazel.vercel.app/", "https://github.com/Grometto-N/wordle-frontend"
                                 , "https://github.com/Grometto-N/wordle-backend")); 
                                 
    arrayToRetrun.push(defProject("HackaTweet", messageTweet, ["JavaScript", "React", "CSS", "Next.js","Node.js", "Redux"], ["Node.js", "Express", "MongoDB"], "HackaTweet.png", 
                                 "https://hackatweet-frontend-omega.vercel.app/", "https://github.com/Grometto-N/Hackatweet-Frontend"
                                 , "https://github.com/Grometto-N/Hackatweet-Backend")); 
    
    arrayToRetrun.push(defProject("MorningNews", messageMorning, ["TypeScript", "React", "CSS", "Next.js","Node.js", "Redux"], ["Node.js", "Express", "MongoDB", "API externe"], "MorningNews.png", 
                                 "https://morningnews-xi.vercel.app/", "https://github.com/Grometto-N/morningnews"
                                 , "https://github.com/Grometto-N/morningnews-backend"));                             

    return arrayToRetrun;
}

function defProjectPerso(){
    const arrayToRetrun =[];
    // définition des messages
    const messagePortFolio = "Le PortFolio sur lequel vous vous trouvez...";
    const messageWeatherApp = "Apprentissage autodidacte de Symfony5 en refaisant entièrement un projet de formation";


    arrayToRetrun.push(defProject("PortFolio", messagePortFolio, ["JavaScript", "CSS","React", "Node.js"],[], "Portfolio.png", 
                                 null, "https://github.com/Grometto-N/portfolio-nico"
                                 , null));

                                 arrayToRetrun.push(defProject("WeatherApp", messageWeatherApp, ["HTML", "CSS","Symfony5"],["PHP", "MariaDB/MySQL", "API externe", "Symfony5"], "WeatherApp.png", 
                                 null, "https://github.com/Grometto-N/weatherapp"
                                 , null));

    return arrayToRetrun;
}

module.exports = { getPlan , initComponentHeight, initTriggerLevel, initStartTranslation, defProjectCapsule, defProjectPerso};