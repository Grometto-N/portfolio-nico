import { useState, useEffect } from 'react';

import {initComponentHeight, getPartLevelY, progressBarLength} from '../modules/progressBar';

// hook permettant de gérer la longueur de la scrollBar

export default function useProgressBar(componentsHeight, isMobile){

    const [barProgress, setBarProgress] = useState(0); 

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
      }, []);

      return barProgress;
}