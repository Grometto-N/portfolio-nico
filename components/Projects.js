import styles from '../styles/Projects.module.css';
import Project from './Project';

function Projects(props) { 

const theProjects = [{title : "TicketHack", message:"1er Hackathon de la formation : à partir coder d'une maquette sous forme de vidéo", skillsFront :["HTML", "CSS"], skillsBack:["Express","Node.js"], image : "TicketHack.png"}, 
                    {title : "essai2", message:"blabla", skillsFront :["HTML", "CSS","JS"], skillsBack : [], image : "TicketHack.png"},
                    {title : "essai3", message:"blabla", skillsFront :["React", "CSS","JS"], skillsBack:["PHP"], image : "TicketHack.png"}
                    ];
const display = theProjects.map(elt=>{
    return(<Project datasProject={elt}/>)
})

return (
    <div  className={styles.container}>
        {/* Explications */}
        <div className={styles.explications}>
            <p>Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. 
                Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe.
                Vous trouverez ci-dessous les projets réalisés de bout en bout en partant de zéro :
            </p>
        </div>
        {/* Affichage des projets */}
        <div className={styles.cards}>{display}</div>
    </div>
);
}

export default Projects;