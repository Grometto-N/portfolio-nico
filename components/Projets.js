import styles from '../styles/Projets.module.css';


function Projets(props) { 

return (
    <div  className={styles.container}>
        {/* Explications */}
        <div className={styles.explications}>
            <p>Durant le bootcamp de La Capsule, nous avons codé projets web et projets mobile de manière guidée. 
                Nous avons également réalisé seul différents challenges, deux hackathons et un projet de fin de batch en groupe.
                Vous trouverez ci-dessous les projets réalisé à partir de zéro :
            </p>
        </div>
        {/* Contenu */}
    </div>
);
}

export default Projets;