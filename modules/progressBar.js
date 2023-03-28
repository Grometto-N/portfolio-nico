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

module.exports = { initComponentHeight, initTriggerLevel, };