import styles from '../styles/Competences.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 , faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image'


import { SiTypescript, SiMongodb} from "react-icons/si";
// import {SiTypescript} 
// SiMongodb

function Competences() {
    const langages =[
        {name : "HTML5" , src : require("../public/HTML5.svg") },
        {name : "CSS" , src : require("../public/CSS3.svg") },
        {name : "JavaScript" , src : require("../public/JS.svg") },
        {name : "TypeScript" , src : require("../public/TS.svg") },
        {name : "MongoDB" , src : require("../public/Mongo.svg") },
        {name : "Python (bases)" , src : require("../public/Python.svg") },
    ]

    const frameworks =[
        {name : "Node.js" , src : require("../public/Node.svg")},
        {name : "Next.js" , src : require("../public/Next.svg")},
        {name : "Express" , src : require("../public/Express.svg")},
        {name : "Expo" , src : require("../public/Expo.svg")},
        {name : "React.js" , src : require("../public/React.svg")},
        {name : "ReactNative" , src : require("../public/React.svg")},
    ]

    const divers =[
        {name : "Git/GitHub" ,  src : require("../public/GitHub.svg")},
        {name : "VS Code" ,  src : require("../public/VSC.svg")},
        {name : "Miro" ,  src : require("../public/Miro.svg")},
        {name : "Figma" ,  src : require("../public/Figma.svg")},
        {name : "Trello" ,  src : require("../public/Trello.svg")},
        {name : "LaTeX" ,  src : require("../public/latex.svg")},
    ]
    
    const displayLangages = langages.map(elt=>{
         return(<div className={styles.row} > <Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    const displayFrameworks = frameworks.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                            /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    const displayDivers = divers.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                alt ={elt.name} 
                                                className={styles.image}
                                                width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

return (
    <div  className={styles.container}>
        
        <div className={styles.field }>
            <h3>Langages et BDD</h3>
            {displayLangages}
        </div>
        <div className={styles.field }>
            <h3>Frameworks et librairies</h3>
            {displayFrameworks}
        </div>
        <div className={styles.field }>
            <h3>Divers</h3>
            {displayDivers}
        </div>
    </div>
);
}

export default Competences;