import styles from '../styles/Box.module.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

// import { animated, useSpring } from "react-spring";

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';

import {animated, useScroll, useSpring} from '@react-spring/web'

// import {AnimatedOnScroll} from "react-animated-css-onscroll"
import { defProjectCapsule, defProjectPerso } from '../modules/initialization';

function Box(props) {
    
    useEffect(() => {
        props.getHeight(ref.current.scrollHeight, props.name);
    }, [])

    // style pour couleur de fond
// let style = {"backgroundcolor" : "#e5e1e1"};

const styleBack = {backgroundColor : "#d3d9f3", color : "#414141"};
  // const plan = [{name : "presentation", title : "A propos"}, {name : "competences", title : "Competences"}, {name : "projetsCapsule", title : "Projets de formation"} ]
    let display = (<div>{props.name}</div>);

    if(props.name === "skills"){
        display = <Skills />
        styleBack.backgroundColor = "#414141";
        styleBack.color = "#ffff";
    }

    if(props.name === "projetsCapsule"){
        const introduction = "Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe. Vous trouverez ci-dessous les projets réalisés de bout en bout en partant de zéro :";
        display = <Projects dataProjects={defProjectCapsule()}  informations={introduction} />
    }

    if(props.name === "projetsPerso"){
        display = <Projects dataProjects={defProjectPerso()} informations={null}/>
    }

    if(props.name === "contact"){
        display = <Contact />
        styleBack.backgroundColor = "#414141";
        styleBack.color = "#ffff";
    }

    if(props.name === "presentation"){
        display=(<div>
            <p>
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
                Mon expérience dans l'enseignement me permettent d'apprendre rapidement et de manière autonome.
                Je suis cependant conscient du chemin qu'il me reste à parcourir dans un métier en constante évolution et j'espère trouver un poste qui me permettra de 
                continuer à monter en compétences.
            </p>
        </div>)
    }

const start = props.startAnimate.starting ? "100%" : "0%";
const startAnimate= useSpring({
        from: { transform: `translate(${start},0%)` },
        to: { transform: "translate(0%,0%)" },
        config: { duration: 3000 },
        reset: props.startAnimate.canStart,
        loop : false,
    });
// const startAnimate= useSpring({
//     from: { transform: `opacity(0.01)` },
//     to: { transform: "opacity(1)" },
//     config: { duration: 3000 },
//     reset: props.startAnimate.canStart,
//     loop : false,
// });

const ref = useRef();


return (
    <div ref={ref} className={styles.container}  style = {styleBack} id={props.name}>
        {/* Titre */}
         <animated.div  className={styles.title}  style={startAnimate} >
          <h2 className={styles.titleText} >{props.title}</h2>
        </animated.div> 
        {/* <AnimatedOnScroll animationIn="bounceInRight" 
        style={{marginTop:"80px",color:"green"}}>
             <h2>Welcome to Geeksforgeeks</h2>
          </AnimatedOnScroll> */}
        {/* Contenu */}
        { display}
    </div>
);
}

export default Box;