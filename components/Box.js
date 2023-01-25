import styles from '../styles/Box.module.css';
import Competences from './Competences';
import Projets from './Projets';

function Box(props) {
  // const plan = [{name : "presentation", title : "A propos"}, {name : "competences", title : "Competences"}, {name : "projetsCapsule", title : "Projets de formation"} ]
    let display = (<div>{props.name}</div>);

    if(props.name === "competences"){
        display = <Competences />
    }

    if(props.name === "projetsCapsule"){
        display = <Projets />
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