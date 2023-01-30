import styles from '../styles/Box.module.css';
import Skills from './Skills';
import Projects from './Projects';

function Box(props) {
  // const plan = [{name : "presentation", title : "A propos"}, {name : "competences", title : "Competences"}, {name : "projetsCapsule", title : "Projets de formation"} ]
    let display = (<div>{props.name}</div>);

    if(props.name === "skills"){
        display = <Skills />
    }

    if(props.name === "projetsCapsule"){
        display = <Projects />
    }

    if(props.name === "presentation"){
        display=(<div>
            <p>
                Après avoir enseigné les mathématiques dans le secondaire pendant quinze années, j'ai décidé de changer de carrière 
                et de m'orienter vers le développement web.
            </p>
            <p>
                J'ai appris rapidement de nombreuses competences en participant à un bootcamp de La Capsule à la fin de l'année 2022 et
                je me suis découvert une passion pour le code.
            </p>
            <p>
                Je suis conscient du chemin qu'il me reste à parcourir dans un métier en constante évolution et j'espère trouver un poste qui me permettra de 
                continuer à monter en compétences.
            </p>
        </div>)
    }


return (
    <div  className={styles.container}>
        {/* Titre */}
        <div className={styles.title}>
            <h2 className={styles.titleText} style={{transform: `translate(100px, 0px)` }}>{props.title}</h2>
        </div>
        {/* Contenu */}
        { display}
    </div>
);
}

export default Box;