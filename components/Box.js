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


function Box(props) {
    
    useEffect(() => {
        props.getHeight(ref.current.scrollHeight, props.name);
    }, [])



  // const plan = [{name : "presentation", title : "A propos"}, {name : "competences", title : "Competences"}, {name : "projetsCapsule", title : "Projets de formation"} ]
    let display = (<div>{props.name}</div>);

    if(props.name === "skills"){
        display = <Skills />
        
    }

    if(props.name === "projetsCapsule"){
        display = <Projects />
    }

    if(props.name === "contact"){
        display = <Contact />
    }

    if(props.name === "presentation"){
        display=(<div>
            <p>
                Après avoir enseigné les mathématiques dans le secondaire pendant quinze années, j'ai décidé de changer de carrière 
                et de m'orienter vers le développement web.
            </p>
            <p>
                J'ai appris rapidement de nombreuses competences en participant à un bootcamp de La Capsule à la fin de l'année 2022 et
                je me suis découvert une passion pour le code.
            </p>
            <p>
                Je suis conscient du chemin qu'il me reste à parcourir dans un métier en constante évolution et j'espère trouver un poste qui me permettra de 
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

const ref = useRef();

// let startAnimate;
// if(props.startAnimate){
//     startAnimate = scrolling;
// }

return (
    <div ref={ref} className={styles.container} id={props.name}>
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