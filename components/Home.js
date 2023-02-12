import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'
import Contact from './Contact';
import MyImage from './MyImage';

import { useRef, useEffect, useState } from 'react';

import { getPlan, initComponentHeight, initTriggerLevel, initStartTranslation } from '../modules/initialization';


// import useSticky from "../Hooks/useSticky";

function Home() {

  const refImage = useRef();

   const plan = getPlan();

  
// définition et initialisation des états
  const [yScroll, setYScroll] = useState(0); // pour obtenir la longueur scrollée
  const [barProgress, setBarProgress] = useState(0); // pour définir la longueur de la barre de progression
  const [componentsHeight, setComponentsHeight] = useState(initComponentHeight()) // pour obtenir la hauteur de chaque composant principal
  const [startTextTranslation, setStartTextTranslation] = useState((initStartTranslation)) // pour savoir si l'animation du texte a déjà été lancé + un boolean de déclenchement

// récupération des hauteurs des différents composants
const getHeight =(height,componentName) =>{
        const temporyComponentsHeight =  componentsHeight;
        temporyComponentsHeight[componentName] = height;
        setComponentsHeight(temporyComponentsHeight);
    }

 

  // initialisation d'une fonction gérant la longueur de la scrollBar

  useEffect(() => {
    const handleScroll = event => {
      setYScroll(window.scrollY);

      let sum = 0;
      const triggerLevelY = initTriggerLevel();
      let levelY = 0;
      for(let key in componentsHeight){
        // sum = sum + componentsHeight[key];
        if(Object.keys(triggerLevelY).some(elt=> elt === key)){
          triggerLevelY[key] = levelY ;
          levelY = levelY + componentsHeight[key];
        }
      }

      for(let key in componentsHeight){
        if(key !== "Header" && key !== "contact")
         sum = sum + componentsHeight[key];
      }

      console.log(window.scrollY)
      console.log("triggerLevelY",triggerLevelY)

      const textTranslationTempory = startTextTranslation;
      let barPurcent = 0;

      if(window.scrollY>0){
           barPurcent = (window.scrollY + componentsHeight["contact"])/sum * 100;
          textTranslationTempory.presentation.starting = true;
          textTranslationTempory.presentation.canStart = false;
      }

      
      if(window.scrollY > triggerLevelY.skills){
          textTranslationTempory.skills.starting = true;
          textTranslationTempory.skills.canStart = false;
      }

      if(window.scrollY > triggerLevelY.projetsCapsule){
        textTranslationTempory.projetsCapsule.starting = true;
        textTranslationTempory.projetsCapsule.canStart = false;
    }

    if(window.scrollY > triggerLevelY.projetsPerso){
      textTranslationTempory.projetsPerso.starting = true;
      textTranslationTempory.projetsPerso.canStart = false;
    }

    if(window.scrollY > triggerLevelY.contact){
        if(window.scrollY > triggerLevelY.contact + componentsHeight["contact"]/2){
          barPurcent = 99;
        }

      textTranslationTempory.contact.starting = true;
      textTranslationTempory.contact.canStart = false;
    }

      setBarProgress(barPurcent)
      setStartTextTranslation(textTranslationTempory)
    };

 

    window.addEventListener('scroll', handleScroll);
    const temporyComponentsHeight =  componentsHeight;
          temporyComponentsHeight["image"] = refImage.current.scrollHeight;
          setComponentsHeight(temporyComponentsHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 // variable d'affichage des différentes parties hors header fixe et contact
 const display = plan.map(elt =>{
  return <Box getHeight={getHeight} title ={elt.title} name={elt.name} startAnimate={startTextTranslation[elt.name]}/>
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
