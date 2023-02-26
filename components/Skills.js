import styles from '../styles/Skills.module.css';

import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import {animated, useSpring} from '@react-spring/web'

import { useState } from 'react';

import Circle from './Circle';


function Skills(props) {
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
    ]


    
    // variable d'affichage des langages chaque ligne contient le logo + le nom
    const displayLangages = langages.map(elt=>{
        return(<div className={styles.row} > <Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des frameworks chaque ligne contient le logo + le nom
    const displayFrameworks = frameworks.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                            /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des informations dans la table divers chaque ligne contient le logo + le nom
    const displayDivers = divers.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                alt ={elt.name} 
                                                className={styles.image}
                                                width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

     // variables et style d'animations
     console.log(props.startAnimate.starting);
    const startanimate= props.startAnimate.starting  ? "-100%" : "0%";
     const animateBox = useSpring({
         from: {x : startanimate},
         to: { x: "30%" },
         config: { duration: 2000 },
        reset : true,
     });

// AFFICHAGE DU COMPOSANT
return (
    <div  className={styles.container}>
        {/* TABLES */}
        <div className={styles.tableContainer}> 
                <div  className={styles.table} style={animateBox}>
                    <h3>Langages et BDD</h3>
                    {displayLangages}
                </div>
                <div className={styles.table }>
                    <h3>Frameworks et librairies</h3>
                    {displayFrameworks}
                </div>
                <div className={styles.table }>
                    <h3>Divers</h3>
                    {displayDivers}
                </div>
        </div>
        {/* CV */}
        <p>Vous trouverez davantage de précisions sur mes formations et compétences : </p>
        {/* <button onClick={onButtonClick}>
                    Download PDF
                </button> */}
        <div className={styles.cv} 
         onMouseEnter={() => setIsHover(true)} 
         onMouseLeave={() => setIsHover(false)}>
            <Circle isHover={isHover} />
            {/* <div onClick={onButtonClick} className={styles.cvLink}>Consulter <FontAwesomeIcon icon={faFilePdf} style={{height : "25px"}} /> mon CV</div> */}
        </div>
    </div>
);
}

export default Skills;