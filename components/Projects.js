import styles from '../styles/Projects.module.css';
import Project from './Project';


function Projects(props) { 

// variable d'affichage des projets
const display = props.dataProjects.map(elt=>{
    return(<Project datasProject={elt}/>)
})

// AFFICHAGE DU COMPOSANT
return (
    <div  className={styles.container}>
        {/* Explications */}
        <div className={styles.explications}>
            <p className={styles.informations}>{props.informations}</p>
        </div>
        {/* Affichage des projets */}
        <div className={styles.cards}>{display}</div>
    </div>
);
}

export default Projects;