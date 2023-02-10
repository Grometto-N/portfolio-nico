import styles from '../styles/Projects.module.css';
import Project from './Project';


function Projects(props) { 

// variable d'affichage des projets
const display = props.dataProjects.map(elt=>{
    return(<Project datasProject={elt}/>)
})


return (
    <div  className={styles.container}>
        {/* Explications */}
        <div className={styles.explications}>
            {/* <p>Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. 
                Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe.
                Vous trouverez ci-dessous les projets réalisés de bout en bout en partant de zéro :
            </p> */}
            <p>{props.informations}</p>
        </div>
        {/* Affichage des projets */}
        <div className={styles.cards}>{display}</div>
    </div>
);
}

export default Projects;