import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'
import MyImage from './MyImage';

import { useRef, useEffect, useState } from 'react';


import { getPlan} from '../modules/initialization';
import {initComponentHeight, getPartLevelY, progressBarLength} from '../modules/progressBar';

import useScreenWidth from '../hooks/useIsMobile';

function Home() {

  // on utilise une référence pour obtenir la hauteur du composant contenant l'image et l'animation d'introduction
  const refImage = useRef();

  // variable définissant le plan du site (les informations sont dans le module initialization)
  const plan = getPlan();

  
// définition et initialisation des états
  const [barProgress, setBarProgress] = useState(0); // pour définir la longueur de la barre de progression
  const [componentsHeight, setComponentsHeight] = useState(initComponentHeight()) // pour obtenir la hauteur de chaque composant principal
  // const [startTextTranslation, setStartTextTranslation] = useState((initStartTranslation)) // pour savoir si l'animation du texte a déjà été lancé + un boolean de déclenchement

// récupération des hauteurs des différents composants (utiliser pour l'inverse data flow)
const getHeight =(height,componentName) =>{
        const temporyComponentsHeight =  componentsHeight;
        temporyComponentsHeight[componentName] = height;
        setComponentsHeight(temporyComponentsHeight);
}

// utilisation du hook pour savoir si la taille de l'écran est celui d'un smartphone
const isMobile = useScreenWidth();


  // initialisation d'une fonction gérant la longueur de la scrollBar pour la barre 
  useEffect(() => {

    const handleScroll = event => {
      // définition des hauteurs scrollées correspondant à chaque partie
      const partLevelY = getPartLevelY(componentsHeight); // les données initiales sont dans le module initialization

     // on met à jour l'état pour la longueur de la barrre de progression 
      setBarProgress(progressBarLength(partLevelY,isMobile));
    };

    // initialisation : on met une écoute sur la scroll barre avec la fonction crée
    window.addEventListener('scroll', handleScroll);

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

// const bar = isMobile ? `${barProgress}`: `${barProgress}`;
const bar = isMobile ? `${barProgress*4.3}px`: `${barProgress}%`;
// AFFICHAGE DES COMPOSANTS
  return (
    <div className={styles.main} >
        {/* HEADER FIXE */}
        < Header getHeight={getHeight} dataHeader={plan} bar={bar}/>
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
