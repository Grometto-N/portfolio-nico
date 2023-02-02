import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'

import { useRef, useEffect, useState } from 'react';

// import useSticky from "../Hooks/useSticky";

function Home() {
  const refA = useRef();
  const refB = useRef();
  const refC = useRef();
  const refD = useRef();

   const plan = [
    {name : "presentation", title : "A propos", ref : refA}, 
    {name : "skills", title : "Competences", ref : refB}, 
    {name : "projetsCapsule", title : "Projets de formation", ref : refC},
    {name : "projetsPerso", title : "Projets autodidacte", ref : refD},
  ]

  

  const [yScroll, setYScroll] = useState(0);
  const [nico, setNico] = useState(0);
  const [startTextTranslation, setStartTextTranslation] = useState({presentation : true,
                                                                    skills : false,
                                                                    projetsCapsule : false,
                                                                    projetsPerso : false,
                                                                  })

  // affichage
  const display = plan.map(elt =>{
    return <Box ref={elt.ref} title ={elt.title} name={elt.name} startAnimate={startTextTranslation[elt.name]}/>
  })
 

  useEffect(() => {


   
    const handleScroll = event => {
      setYScroll(window.scrollY);
      if(window.scrollY > 150){
        setStartTextTranslation({
              presentation : false,
              skills : true,
              projetsCapsule : false,
              projetsPerso : false,
        })
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const ref = useRef();


// console.log("scroll", yScroll)
const getHeight =(h) =>{
      setNico(h)
}

console.log("Nico", nico)

  // const { isSticky, element } = useSticky()
  return (
    

    <div className={styles.main} >
        {/* HEADER FIXE */}
        < Header height={getHeight} dataHeader={plan} bar={"20%"}/>
        <div className={styles.container} >
          {/* Photo */}
          <div  className={styles.headerImage}>
              <p>vdfbdfbdgbgbgfbdgx</p>
          </div>
          {/* Contenu */}
          {display}
        </div>
    </div>
  );
}

export default Home;
