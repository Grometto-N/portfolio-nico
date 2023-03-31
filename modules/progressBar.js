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

// fonction permettant d'avoir les valeurs correspondant de chaque parties sur la scrollBarY
function getPartLevelY(){

}

// function calculer la longueur proportionnelle pour chaque partie
function barLengthProportionPart(currentLevel, nextLevel){
    return  (window.scrollY - currentLevel)/(nextLevel-currentLevel);
} 

// fonction permettant de calculer la longueur de la progress bar
function progressBarLength(partLevelY, isMobile){
    // calcule de la longueur de chaque partie (les div ayant la même taille on découpe selon le nombre de div)
    const partSize = 100/getPlan().length; 

    // l'utilisateur arrive au niveau du contact 
    if(window.scrollY >partLevelY.contact && !isMobile){
        // la méthode scrollMaxY n'existe pas dans tous les navigateurs
        return window.scrollMaxY ? (window.scrollY -partLevelY.contact)/(window.scrollMaxY - partLevelY.contact) *partSize + partSize*4.96 :99.5;
    }

    // pour mobile
    if(window.scrollY > partLevelY.projetsPerso  && isMobile){
        return 50000;
    }

    // l'utilisateur arrive aux projets perso
    if(window.scrollY > partLevelY.projetsPerso){
        // return (window.scrollY - levelY.projetsPerso)/(levelY.contact-levelY.projetsPerso) *partSize+ partSize*4;
        return  barLengthProportionPart(partLevelY.projetsPerso,partLevelY.contact) *partSize+ partSize*4;
    }

    // l'utilisateur arrive aux projets de formations
    if(window.scrollY > partLevelY.autoformation){
        return barLengthProportionPart(partLevelY.autoformation,partLevelY.projetsPerso) *partSize+ partSize*3;
    }

    // l'utilisateur arrive aux projets de formations
    if(window.scrollY > partLevelY.projetsCapsule){
        return barLengthProportionPart(partLevelY.projetsCapsule,partLevelY.autoformation) *partSize + partSize*2;
    }

    // l'utilisateur arrive aux compétences
    if(window.scrollY > partLevelY.skills){
        return  barLengthProportionPart(partLevelY.skills,partLevelY.projetsCapsule) *partSize + partSize;
      }

    // cas de base : l'utilisateur a scrollé
    if(window.scrollY>0){
        return  barLengthProportionPart(partLevelY.skills,0) *partSize;
    }

    //sécurité : renvoyer un nombre
    return 0;
}

module.exports = { initComponentHeight, initTriggerLevel, progressBarLength,getPartLevelY};