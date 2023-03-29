import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'
import MyImage from './MyImage';

import { useRef, useEffect, useState } from 'react';


// import { useInView } from 'react-hook-inview'

import { getPlan} from '../modules/initialization';

import {initComponentHeight, initTriggerLevel} from '../modules/progressBar';


function Home() {

  // on utilise une référence pour obtenir la hauteur du composant contenant l'image et l'animation d'introduction
  const refImage = useRef();

  // variable définissant le plan du site (les informations sont dans le module initialization)
  const plan = getPlan();

  
// définition et initialisation des états
  const [yScroll, setYScroll] = useState(0); // pour obtenir la longueur scrollée
  const [barProgress, setBarProgress] = useState(0); // pour définir la longueur de la barre de progression
  const [componentsHeight, setComponentsHeight] = useState(initComponentHeight()) // pour obtenir la hauteur de chaque composant principal
  // const [startTextTranslation, setStartTextTranslation] = useState((initStartTranslation)) // pour savoir si l'animation du texte a déjà été lancé + un boolean de déclenchement

// récupération des hauteurs des différents composants (utiliser pour l'inverse data flow)
const getHeight =(height,componentName) =>{
        const temporyComponentsHeight =  componentsHeight;
        temporyComponentsHeight[componentName] = height;
        setComponentsHeight(temporyComponentsHeight);
}


  // initialisation d'une fonction gérant la longueur de la scrollBar pour la barre 
  useEffect(() => {
    const handleScroll = event => {
      // la hauteur scrollée sera assigné à l'état scrollY
      setYScroll(window.scrollY);

      // définition des hauteurs scrollées déclenchant les animations
      const triggerLevelY = initTriggerLevel(); // les données initiales sont dans le module initialization
      let levelY = 0;
      let sumBis = 0;
      for(let key in componentsHeight){
        if(Object.keys(triggerLevelY).some(elt=> elt === key)){
          triggerLevelY[key] = levelY ;
          levelY = levelY + componentsHeight[key];
        }
        sumBis = sumBis + triggerLevelY[key];
      }

      // calcul de la hauteur totale des composants (sum) 
      let sum = 0;
      for(let key in componentsHeight){
        // if(key !== "Header" && key !== "contact")
        if(key !== "Header" && key !== "image"){
          sum = sum + componentsHeight[key];
        }
      }

      // initialisation de textTranslationTempory qui permet de déclencher les animations quand on scolle
      // const textTranslationTempory = startTextTranslation;
      // initialisation de barPurcent pour gérer l'avancée de la barre de progression du header fixe
      let barPurcent = 0;
      const partSize = 100/getPlan().length; 
      // cas de base : l'utilisateur a scrollé
      if(window.scrollY>0){
           barPurcent = (window.scrollY)/triggerLevelY.skills *16.7;
      }

      // l'utilisateur arrive aux compétences
      if(window.scrollY > triggerLevelY.skills){
          barPurcent = (window.scrollY-triggerLevelY.skills)/(triggerLevelY.projetsCapsule-triggerLevelY.skills) *partSize + partSize;
        }

      // l'utilisateur arrive aux projets de formations
      if(window.scrollY > triggerLevelY.projetsCapsule){
          barPurcent = (window.scrollY -triggerLevelY.projetsCapsule)/(triggerLevelY.autoformation -triggerLevelY.projetsCapsule) *partSize + partSize*2;
      }

      // l'utilisateur arrive aux projets de formations
      if(window.scrollY > triggerLevelY.autoformation){
        barPurcent = (window.scrollY -triggerLevelY.autoformation)/(triggerLevelY.projetsPerso-triggerLevelY.autoformation) *partSize+ partSize*3;
    }


      // l'utilisateur arrive aux projets perso
      if(window.scrollY > triggerLevelY.projetsPerso){
          barPurcent = (window.scrollY -triggerLevelY.projetsPerso)/(triggerLevelY.contact-triggerLevelY.projetsPerso) *partSize+ partSize*4;
     }

     console.log(window.scrollMaxY);
    //  console.log(window.scrollY);
     console.log(sum);
    // //  console.log(sumBis);
      console.log(triggerLevelY);
     console.log(componentsHeight);
    // // l'utilisateur arrive au niveau du contact 
    if(window.scrollY >triggerLevelY.contact){
          barPurcent = (window.scrollY -triggerLevelY.contact)/(window.scrollMaxY - triggerLevelY.contact) *partSize + partSize*4.95;
          if(window.scrollY >triggerLevelY.contact+100){
            barPurcent = 99.5;
          }
      
    }

    // on met à jour les états pour la bar de progression et pour lancer les animations
      setBarProgress(barPurcent)
      // setStartTextTranslation(textTranslationTempory)
    };

    // initialisation : on met une écoute sur la scroll bar
    window.addEventListener('scroll', handleScroll);
    const temporyComponentsHeight =  componentsHeight;
          temporyComponentsHeight["image"] = refImage.current.scrollHeight;
          setComponentsHeight(temporyComponentsHeight);

    // unmount : on supprime l'écoute sur la scroll bar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // fin du useEffect


 // variable d'affichage des différentes parties hors header fixe et contact
  const display = plan.map(elt =>{
  // return <Box key = {elt.name} getHeight={getHeight} title ={elt.title} name={elt.name} startAnimate={startTextTranslation[elt.name]}/>
  return <Box key = {elt.name} getHeight={getHeight} title ={elt.title} name={elt.name} />
})


// AFFICHAGE DES COMPOSANTS
  return (
    <div className={styles.main} >
        {/* HEADER FIXE */}
        < Header getHeight={getHeight} dataHeader={plan} bar={`${barProgress}%`}/>
        <div className={styles.container} >
          {/* Photo */}
          <div ref={refImage} className={styles.headerImage}>
              <MyImage />
          </div>
          {/* Contenu */}
          {display}
        </div>
    </div>
  );
}

export default Home;
