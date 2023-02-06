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
    // définition des message
    const messageTicket = "1er Hackathon de la formation : à partir d'une maquette sous forme de vidéo, nous avons coder de zéro un site de réservation de billets";
    const arrayToRetrun =[];

    arrayToRetrun.push(defProject("TicketHack", messageTicket, ["HTML", "CSS", "DOM", "Node.js"], ["Express","MongoDB"], "TicketHack.png", 
                                 "https://ticket-hack-perso-frontend.vercel.app/", "https://github.com/Grometto-N/ticketHackPerso-frontend"
                                 , "https://github.com/Grometto-N/ticketHackPerso-backend"));

    return arrayToRetrun;
}

module.exports = { getPlan , initComponentHeight, initStartTranslation, defProjectCapsule};