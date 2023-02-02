import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'

import { useRef, useEffect, useState } from 'react';



// import useSticky from "../Hooks/useSticky";

function Home() {

  const refImage = useRef();

   const plan = [
    {name : "presentation", title : "A propos"}, 
    {name : "skills", title : "Competences"}, 
    {name : "projetsCapsule", title : "Projets de formation"},
    {name : "projetsPerso", title : "Projets autodidacte"},
  ]

  

  const [yScroll, setYScroll] = useState(0);
  const [barProgress, setBarProgress] = useState(0);

  const [componentsHeight, setComponentsHeight] = useState({
                                                      Header : 0,
                                                      image : 0,
                                                      presentation : 0,
                                                      skills : 0,
                                                      projetsCapsule : 0,
                                                      projetsPerso : 0,
                                                    });

  // const componentsHeight = {
  //                                                       image : 0,
  //                                                       presentation : 0,
  //                                                       skills : 0,
  //                                                       projetsCapsule : 0,
  //                                                       projetsPerso : 0,
  //                                                     }

  const [startTextTranslation, setStartTextTranslation] = useState({presentation : true,
                                                                    skills : false,
                                                                    projetsCapsule : false,
                                                                    projetsPerso : false,
                                                                  })

                                                                  // console.log("scroll", yScroll)
                                                            



const getHeight =(height,componentName) =>{
          const temporyComponentsHeight =  componentsHeight;
          temporyComponentsHeight[componentName] = height;
          setComponentsHeight(temporyComponentsHeight);
    }

  // affichage
  const display = plan.map(elt =>{
    return <Box getHeight={getHeight} title ={elt.title} name={elt.name} startAnimate={startTextTranslation[elt.name]}/>
  })
  console.log( componentsHeight)
  console.log( yScroll)

  useEffect(() => {

    

    const handleScroll = event => {
      console.log("window", window.innerHeight)
      setYScroll(window.scrollY);

      let sum = 0;
      for(let key in componentsHeight){
        sum = sum + componentsHeight[key];
      }

      const textTranslationTempory = startTextTranslation;
      let barPurcent = 0;
      if(window.scrollY>0){
        barPurcent = (window.scrollY-componentsHeight.Header)/sum * 100;
        textTranslationTempory.presentation = false;
      }
      setBarProgress(barPurcent)

      
      if(window.scrollY > 300){
        textTranslationTempory.presentation = false;
          textTranslationTempory.skills = true;
      }
      
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




  return (
    

    <div className={styles.main} >
        {/* HEADER FIXE */}
        < Header getHeight={getHeight} dataHeader={plan} bar={`${barProgress}%`}/>
        <div className={styles.container} >
          {/* Photo */}
          <div ref={refImage} className={styles.headerImage}>
              <p>vdfbdfbdgbgbgfbdgx</p>
          </div>
          {/* Contenu */}
          {display}
        </div>
    </div>
  );
}

export default Home;
