import styles from '../styles/TextHover.module.css';

import Tag from "./Tag"

import {animated, useSpring} from '@react-spring/web'

import {getDarkBGColors, getLightBGColors} from '../modules/initialization';

function TextHover(props) {
    // récupération des données sur le projet 
    const {title, message, skillsFront, skillsBack,link, gitFront, gitBack, animateCard} = props.datasProject;

    // affichage des tags du front-end
    const displayTagsFront = skillsFront.map((elt,i)=>{
        return <Tag text={elt} key={i}/> 
    })

    // affichage des tags du back-end
    const displayTagsBack = skillsBack.map((elt,i)=>{
        return <Tag text={elt} key={i}/> 
    })

// gestion de l'affichage du composant avec un style conditionnel
const direction = {rotateY : animateCard ? "180deg": "0deg" }
const colors =  animateCard ? getLightBGColors() : getDarkBGColors();

// animation d'apparition
const animateBox = useSpring({
        from: {opacity : 0 },
        to: { opacity: 0.9},
        config: { duration: 1000 },
        delay : animateCard ? 400: 0,
    });

    // groupement des différents styles à appliquer (animation, couleurs...)
    var componentStyles = Object.assign({}, 
        animateBox, direction, colors
    );

// Affichage conditionnel du nom du dépôt gitHub
const repoGitName = gitBack? "GitHub Front-End" : "Dépôt GitHub";

// AFFICHAGE DU COMPOSANT
return (
    
    // <div className={styles.container} style={isVisible}> 
    <animated.div className={styles.container} style = {componentStyles}  >
        {/* Titre */}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message} </p>
        {/* Frontend */}
        <h4 className={styles.trait}>Front-End</h4>
        <div className={styles.tagContainer}> {displayTagsFront}</div>
        {/* Backtend */}
        <h4 className={styles.trait}>Back-End</h4>
        <div className={styles.tagContainer}> {displayTagsBack}</div>
        {/* Liens */}
        <h4 className={styles.trait}>Liens</h4>
        <div className={styles.linksContainer}>
        {link && <button className={styles.btn}>
            <a target="_blank" href={link} rel="noopener noreferrer"  className={styles.link}>
                Vers le site
            </a>
            </button>}
            <div className={styles.gitContainer}>
                 {/* lien vers front-end ou lien unique  */}
                <div className={styles.linkGit}>
                {repoGitName }: <a target="_blank" href={gitFront} rel="noopener noreferrer"  className={animateCard ? styles.gitLinkCard : styles.gitLink} >{gitFront}</a>
                </div>
                {/* lien vers backend s'il existe */}
                {gitBack && <div className={styles.linkGit}>
                    GitHub Back-End: <a target="_blank" href={gitBack} rel="noopener noreferrer"  className={animateCard ? styles.gitLinkCard : styles.gitLink}>{gitBack}</a>
                </div>}
            </div>
        </div>
    </animated.div>
// </div>
);
}

export default TextHover;