import { getPlan } from "./initialization";

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

// fonction permettant de calculer la longueur de la progress bar
function progressBarLength(triggerLevelY, isMobile){
    // calcule de la longueur de chaque partie (les div ayant la même taille on découpe selon le nombre de div)
    const partSize = 100/getPlan().length; 

    // l'utilisateur arrive au niveau du contact 
    if(window.scrollY >triggerLevelY.contact && !isMobile){
        // la méthode scrollMaxY n'existe pas dans tous les navigateurs
        return window.scrollMaxY ? (window.scrollY -triggerLevelY.contact)/(window.scrollMaxY - triggerLevelY.contact) *partSize + partSize*4.96 :99.5;
    }

    // pour mobile
    if(window.scrollY > triggerLevelY.projetsPerso  && isMobile){
        return 50000;
    }

    // l'utilisateur arrive aux projets perso
    if(window.scrollY > triggerLevelY.projetsPerso){
        return (window.scrollY -triggerLevelY.projetsPerso)/(triggerLevelY.contact-triggerLevelY.projetsPerso) *partSize+ partSize*4;
    }

    
    // l'utilisateur arrive aux projets de formations
    if(window.scrollY > triggerLevelY.autoformation){
        return (window.scrollY -triggerLevelY.autoformation)/(triggerLevelY.projetsPerso-triggerLevelY.autoformation) *partSize+ partSize*3;
    }

    // l'utilisateur arrive aux projets de formations
    if(window.scrollY > triggerLevelY.projetsCapsule){
        return (window.scrollY -triggerLevelY.projetsCapsule)/(triggerLevelY.autoformation -triggerLevelY.projetsCapsule) *partSize + partSize*2;
    }

    // l'utilisateur arrive aux compétences
    if(window.scrollY > triggerLevelY.skills){
        return (window.scrollY-triggerLevelY.skills)/(triggerLevelY.projetsCapsule-triggerLevelY.skills) *partSize + partSize;
      }

    // cas de base : l'utilisateur a scrollé
    if(window.scrollY>0){
        return (window.scrollY)/triggerLevelY.skills *partSize;
    }

    //sécurité : renvoyer un nombre
    return 0;
}

module.exports = { initComponentHeight, initTriggerLevel, progressBarLength};