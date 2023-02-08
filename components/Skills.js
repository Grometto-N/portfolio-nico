import styles from '../styles/Skills.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {animated, useSpring} from '@react-spring/web'

import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function Skills() {
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

    // fonction pour télécharger le CV au format pdf
    const onButtonClick = () => {
        // utilisation d'un fetch avec blob
        fetch('CV_Nicolas_Grometto.pdf').then(response => {
            response.blob().then(blob => {
                //creation d'un nouvel objet pdf
                const fileURL = window.URL.createObjectURL(blob);
                // différentes propriété définies
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Nicolas_Grometto.pdf';
                alink.click();
            })
        })
    }
    
    // variable d'affichage des langages
    const displayLangages = langages.map(elt=>{
         return(<div className={styles.row} > <Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des frameworks
    const displayFrameworks = frameworks.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                    alt ={elt.name} 
                                                    className={styles.image}
                                                    width={"25vw"}
                                                    height={"25vw"}
                                            /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // variable d'affichage des informations dans la table divers
    const displayDivers = divers.map(elt=>{
        return(<div className={styles.row} ><Image src = {elt.src} 
                                                alt ={elt.name} 
                                                className={styles.image}
                                                width={"25vw"}
                                                    height={"25vw"}
                                                /> <div className={styles.textImage}>{elt.name}</div>
                </div>)
    })

    // <ReactCSSTransitionGroup transitionName="anim"
    //   transitionAppear={true}
    //   transitionAppearTimeout={2000}
    //   transitionEnter={false}
    //   transitionLeave={false}>
    // 		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    // 		</ReactCSSTransitionGroup>

    const cardAnimation= useSpring({
        transform: `scale(1)`,
        from: { transform: `scale(0.5)`},
        loop : true,
    });
return (
    <div  className={styles.container}>
        <div className={styles.tableContainer}> 
                <div className={styles.table} style={cardAnimation}>
                    <h3>Langages et BDD</h3>
                    {displayLangages}
                    {/* <ReactCSSTransitionGroup className={styles.table}
                     transitionName="fade"
                     transitionAppear={true}
      transitionAppearTimeout={2000}
                     >
    		<h3>Langages et BDD</h3>
                    {displayLangages}
    		</ReactCSSTransitionGroup> */}
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
        <p>Vous trouverez davantage de précisions sur mes formations et compétences : </p>
        {/* <button onClick={onButtonClick}>
                    Download PDF
                </button> */}
        <div className={styles.cv}>
            <div onClick={onButtonClick} className={styles.cvLink}>Consulter <FontAwesomeIcon icon={faFilePdf} style={{height : "25px"}} /> mon CV</div>
        </div>
    </div>
);
}

export default Skills;