import styles from '../styles/TextHover.module.css';

import Tag from "./Tag"


function TextHover(props) {
    // récupération des données sur le projet 
    const {title, message, skillsFront, skillsBack,link, gitFront, gitBack} = props.datasProject;

    // affichage des tags du front-end
    const displayTagsFront = skillsFront.map(elt=>{
        return <Tag text={elt}/> 
    })

    // affichage des tags du back-end
    const displayTagsBack = skillsBack.map(elt=>{
        return <Tag text={elt}/> 
    })

// gestion de l'affichage du composant avec un style conditionnel
const isVisible = {visibility : props.isVisible ? "visible": "hidden" }

// AFFICHAGE DU COMPOSANT
return (
    <div className={styles.container} style={isVisible}> 
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
                <div className={styles.linkGit}>
                    GitHub Front-End : <a target="_blank" href={gitFront} rel="noopener noreferrer"  className={styles.gitLink}>{gitFront}</a>
                </div>
                {gitBack && <div className={styles.linkGit}>
                    GitHub Back-End: <a target="_blank" href={gitBack} rel="noopener noreferrer"  className={styles.gitLink}>{gitBack}</a>
                </div>}
            </div>
        </div>
</div>
);
}

export default TextHover;