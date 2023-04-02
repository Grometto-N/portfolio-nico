import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'
import MyImage from './MyImage';

import { useRef, useEffect, useState } from 'react';


import { getPlan} from '../modules/initialization';
import {initComponentHeight, getPartLevelY, progressBarLength} from '../modules/progressBar';

import useIsMobile from '../hooks/useIsMobile';
import useProgressBar from '../hooks/useProgressBar';

export default function Home() {

  // on utilise une référence pour obtenir la hauteur du composant contenant l'image et l'animation d'introduction
  const refImage = useRef();

  // variable définissant le plan du site (les informations sont dans le module initialization)
  const plan = getPlan();

  
  // définition et initialisation des états
  const [componentsHeight, setComponentsHeight] = useState(initComponentHeight()) // pour obtenir la hauteur de chaque composant principal

  // récupération des hauteurs des différents composants (utiliser pour l'inverse data flow)
  const getHeight =(height,componentName) =>{
        const temporyComponentsHeight =  componentsHeight;
        temporyComponentsHeight[componentName] = height;
        setComponentsHeight(temporyComponentsHeight);
  }

  // utilisation du hook pour savoir si la taille de l'écran est celui d'un smartphone

const isMobile = useIsMobile();

  // utilisation du hook pour avoir la longueur de la progress bar
  const barProgress = useProgressBar(componentsHeight,isMobile);

  // variable d'affichage des différentes parties hors header fixe et contact
    const display = plan.map(elt =>{
        return <Box key = {elt.name} getHeight={getHeight} title ={elt.title} name={elt.name} />
    })

// const bar = isMobile ? `${barProgress}`: `${barProgress}`;
const bar = isMobile ? `${barProgress*4.3}px`: `${barProgress}%`;
// AFFICHAGE DES COMPOSANTS
  return (
    <div className={styles.main} >
        {/* HEADER FIXE */}
        < Header getHeight={getHeight} dataHeader={plan} bar={bar} isMobile={isMobile}/>
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

