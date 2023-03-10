import styles from '../styles/Box.module.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


import { useRef, useEffect} from 'react';

import {animated, useSpring} from '@react-spring/web'

import { defProjectCapsule, defProjectPerso } from '../modules/initialization';

function Box(props) {
    // on utilise une reférence pour obtenir la hauteur du composant
    const ref = useRef();

    // initialisation : on transmet la hauteur au parent via la props getHeight (inverse data flow)
    useEffect(() => {
        props.getHeight(ref.current.scrollHeight, props.name);
    }, [])

    // style pour couleur de fond
    const styleBack = {backgroundColor : "#d3d9f3", color : "#414141"};

    // variable d'affichage du contenu
    let display = (<div>{props.name}</div>);

    // cas partie compétences
    if(props.name === "skills"){
        display = <Skills startAnimate={props.startAnimate} />
        styleBack.backgroundColor = "#414141";
        styleBack.color = "#ffff";
    }

    // cas partie projets formation
    if(props.name === "projetsCapsule"){
        const introduction = "Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe. Vous trouverez ci-dessous les projets réalisés de bout en bout en partant de zéro :";
        display = (<Projects dataProjects={defProjectCapsule()}  informations={introduction} />)
    }

    // cas partie projets perso
    if(props.name === "projetsPerso"){
        display = <Projects dataProjects={defProjectPerso()} informations={null}/>
    }

    // cas partie contact
    if(props.name === "contact"){
        display = <Contact />
        styleBack.backgroundColor = "#414141";
        styleBack.color = "#ffff";
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
                Mon expérience dans l'enseignement et mon cursus mathématiques me permettent d'apprendre rapidement et de manière autonome.
                Je suis cependant conscient du chemin qu'il me reste à parcourir dans un métier en constante évolution et j'espère trouver un poste qui me permettra de 
                continuer à monter en compétences.
            </p>
        </div>)
    }

    // animation du titre
    const start = props.startAnimate.starting ? "50%" : "0%";
    // const startAnimate= useSpring({
    //     from: { transform: `translate(${start},0%)` },
    //     to: { transform: "translate(0%,0%)" },
    //     config: { duration: 1000 },
    //     reset: props.startAnimate.canStart,
    //     loop : false,
    // });
    const startAnimate= useSpring({
        from: {y : start},
        to: { y : "0%" },
        config: { duration: 1000 },
        reset: props.startAnimate.canStart,
        loop : false,
    });

    const startBox = props.startAnimate.starting ? 0.1 : 1;
    
    const animateBox = useSpring({
        from: {opacity : startBox },
        to: { opacity : 1 },
        config: { duration: 2500 },
        // reset: props.startAnimate.canStart,
        loop : false,
    });

    var componentStyles = Object.assign({}, 
        styleBack,animateBox
        );

// affichage du composant
return (
    // <div ref={ref} className={styles.container}  style = {styleBack} id={props.name}>
    <animated.div  ref={ref} className={styles.container}  style = {componentStyles} id={props.name}>
        {/* Titre */}
         <animated.div  className={styles.title}  style={startAnimate} >
          <h2 className={styles.titleText} >{props.title}</h2>
        </animated.div> 
        {/* Contenu */}
        { display}
    {/* </div> */}
    </animated.div> 
);
}

export default Box;