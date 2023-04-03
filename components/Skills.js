import styles from '../styles/Skills.module.css';

import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';


import {useRef, useState } from 'react';
import {animated, useSpring} from '@react-spring/web'
import useInView from 'react-inview-callback';

import Circle from './Circle';


function Skills(props) {
    // on utilise une reférence pour obtenir la hauteur du composant
    const refLangagesTable = useRef();
    const refFrameworkksTable = useRef();
    const refDiversTable = useRef();

    // état pour savoir quand lancer les animations 
    const [isVisible,SetIsVisible] = useState(false);

    // state gérant l'affichage de l'animation de téléchargement
    const [isHover, setIsHover] = useState(false);

    // liste des compétences du tableau des langages
    const langages =[
        {name : "HTML5" , src : require("../public/HTML5.svg") },
        {name : "CSS" , src : require("../public/CSS3.svg") },
        {name : "JavaScript" , src : require("../public/JS.svg") },
        {name : "TypeScript" , src : require("../public/TS.svg") },
        {name : "PHP" , src : require("../public/PHP.svg") },
        {name : "MongoDB" , src : require("../public/Mongo.svg") },
        {name : "Python (bases)" , src : require("../public/Python.svg") },
    ]

    // liste des compétences du tableau librairies/frameworks
    const frameworks =[
        {name : "Node.js" , src : require("../public/Node.svg")},
        {name : "Next.js" , src : require("../public/Next.svg")},
        {name : "Express" , src : require("../public/Express.svg")},
        {name : "Expo" , src : require("../public/Expo.svg")},
        {name : "Symfony" , src : require("../public/Symfony.svg")},
        {name : "React.js" , src : require("../public/React.svg")},
        {name : "ReactNative" , src : require("../public/React.svg")},
    ]

    // liste des compétences du tableau divers
    const divers =[
        {name : "Git/GitHub" ,  src : require("../public/GitHub.svg")},
        {name : "VS Code" ,  src : require("../public/VSC.svg")},
        {name : "Miro" ,  src : require("../public/Miro.svg")},
        {name : "Figma" ,  src : require("../public/Figma.svg")},
        {name : "Trello" ,  src : require("../public/Trello.svg")},
        {name : "LaTeX" ,  src : require("../public/latex.svg")},
        {name : "Postman" ,  src : require("../public/Postman.svg")},
    ]

    // animation d'apparition
    function onEntry(entry) {
        SetIsVisible(true)
    }

    function onExit(entry) {
        SetIsVisible(false)
    }

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : props.isMobile ? 0.05 : 0.25,  // permet de déclencher quand la card commence à rentrer dans la viewport : 30%
    }

    const appearanceAnimate = useSpring({
        opacity : isVisible ? 1 : 0.2, 
        config: { duration : 1500},
    })

    useInView(refLangagesTable, options, onEntry, onExit);
    useInView(refFrameworkksTable, options, onEntry, onExit);
    useInView(refDiversTable, options, onEntry, onExit);
    
    // variable d'affichage des langages chaque ligne contient le logo + le nom
    const displayLangages = langages.map(elt=>{
        return(<div  className={styles.row} key={elt.name}> <Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des frameworks chaque ligne contient le logo + le nom
    const displayFrameworks = frameworks.map(elt=>{
        return(<div  className={styles.row} key={elt.name} ><Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                            /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des informations dans la table divers chaque ligne contient le logo + le nom
    const displayDivers = divers.map(elt=>{
        return(<div  className={styles.row} key={elt.name} ><Image src = {elt.src} 
                                                alt ={elt.name} 
                                                className={styles.image}
                                                width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })


// AFFICHAGE DU COMPOSANT
return (
    <div  className={styles.container}>
        {/* TABLES */}
        <div className={styles.tableContainer} > 
                <animated.div  className={styles.table} ref={refLangagesTable} style = {appearanceAnimate}>
                    <h3>Langages et BDD</h3>
                    <div>
                        {displayLangages}
                    </div>
                </animated.div>
                <animated.div className={styles.table } ref={refFrameworkksTable} style = {appearanceAnimate}>
                    <h3>Frameworks et librairies</h3>
                    <div>
                        {displayFrameworks}
                    </div>
                </animated.div>
                <animated.div className={styles.table } ref={refDiversTable} style = {appearanceAnimate}>
                    <h3>Divers</h3>
                    <div>
                        {displayDivers}
                    </div> 
                </animated.div>
        </div>
        {/* CV */}
        <p className={styles.text} >Vous trouverez davantage de précisions sur mes formations et compétences : </p>
        <div className={styles.cv} 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
        >
            <Circle isHover={isHover} />
        </div>
    </div>
);
}

export default Skills;