import styles from '../styles/Box.module.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


import { useRef, useEffect, useState} from 'react';

import useInView from 'react-inview-callback';
import {animated, useSpring} from '@react-spring/web'

import {getDarkBGColors, getLightBGColors, defProjectCapsule, defAutoFormation, defProjectPerso } from '../modules/initialization';

function Box(props) {
    // on utilise une reférence pour obtenir la hauteur du composant
    const ref = useRef();

    // état pour savoir quand lancer les animations 
    const [isVisible,SetIsVisible] = useState(false);


    // initialisation : on transmet la hauteur au parent via la props getHeight (inverse data flow)
    useEffect(() => {
        props.getHeight(ref.current.scrollHeight, props.name);
    }, [])

    // style pour couleur de fond
    let styleColors = getLightBGColors();

    // variable d'affichage du contenu
    let display = (<div>{props.name}</div>);

    // cas partie compétences
    if(props.name === "skills"){
        display = <Skills startAnimate={props.startAnimate} />
        styleColors = getDarkBGColors();
    }

    // cas partie projets formation
    if(props.name === "projetsCapsule"){
        const introduction = "Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe. Vous trouverez ci-dessous les projets réalisés de bout en bout en partant de zéro :";
        display = (<Projects dataProjects={defProjectCapsule()}  informations={introduction} />)
    }

     // cas partie projets formation personnelle
    if(props.name === "autoformation"){
        const introduction = "Afin de continuer à apprendre (PHP, Symfony) ou progresser (TypeScript), j'ai développé seul plusieurs projets :";
        display = (<Projects dataProjects={defAutoFormation()}  informations={introduction} />)
        styleColors = getDarkBGColors();
    }

    // cas partie projets perso
    if(props.name === "projetsPerso"){
        display = <Projects dataProjects={defProjectPerso()} informations={null}/>
    }

    // cas partie contact
    if(props.name === "contact"){
        display = <Contact />
        styleColors = getDarkBGColors();
    }

    // cas partie présentation perso
    if(props.name === "presentation"){
        display=(<div className={styles.presentation}>
            <p >
                Après avoir enseigné les mathématiques dans le secondaire pendant quinze années, j'ai décidé de changer de carrière 
                et de m'orienter vers le développement web.
            </p>
            <p>
                J'ai appris rapidement de nombreuses competences en participant à un bootcamp de dix semaines à La Capsule à partir d'ocotbre 2022. 
                Ce dernier m'a permis de confirmer mon intérêt pour le code et l'algorithmie.
            </p>
            <p>
                De part ma formation mathématiques, j'ai une certaine appétence pour les algorithmes de codage du back-end, 
                mais le bootcamp auquel j'ai participé m'a permis de découvrir le HTML, le CSS et la librairie React.
            </p>
            <p>
                Mon expérience dans l'enseignement, ma formation universitaire en mathématiques et ma passion pour le code me permettent d'apprendre rapidement et de manière autonome.
                Je suis cependant conscient du chemin qu'il me reste à parcourir dans un métier en constante évolution et j'espère trouver un poste qui me permettra de 
                continuer à monter en compétences, explorer de nouvelles technologies.
            </p>
        </div>)
    }

 
    // animation : effet de translation
    const animateTranslationTitle= useSpring({
        y : isVisible ? "0%" : "35%",
        config: { duration: 1000 },
        delay : 200,
    });

    const animateTranslation= useSpring({
        y : isVisible ? "0%" : "10%",
        config: { duration: 1200 },
    });

    // animation de l'ensemble de la card
    // const startBox  = isVisible ? 0.1 : 1;
    // const animateBox = useSpring({
    //     // from: {opacity : startBox   },
    //     // to: { opacity : 1 },
    //     // opacity : isVisible ? 1 : 0,
    //     config: { duration: 1500 },
    //     loop : false,
    // });



    // définition des fonction gérant l'entrée ou la sortie dans la viewport (pour déclencher les animations)
    function onEntry(entry) {
            // console.log('Element has entered the view port', props.title);
        SetIsVisible(true)
    }

    function onExit(entry) {
            // console.log('Element has exited the view port');
        SetIsVisible(false)
    }

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.01 // permet de déclencher quand la card commence à rentrer dans la viewport : 1%
    }

    useInView(ref, options, onEntry, onExit);

// affichage du composant
return (
     <div ref={ref} className={styles.container}  style = {styleColors} id={props.name}>
        {/* Titre */}
         <animated.div  className={styles.title}  style={animateTranslationTitle} >
          <h2 className={styles.titleText} >{props.title}</h2>
        </animated.div> 
        {/* Contenu */}
        <animated.div  style={animateTranslation} >
        { display}
        </animated.div> 
    </div>
);
}

export default Box;