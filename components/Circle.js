import styles from '../styles/Circle.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import {animated, useSpring} from '@react-spring/web'


function Circle (props){
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

    // variables et style d'animations
    const startAnimateCircle= props.isHover ? "0.5turn" : "1turn";
    const animateCircle = useSpring({
        from: {rotate : startAnimateCircle},
        to: { rotate : "1turn" },
        config: { duration: 800 },
        // reset: stopanimate,
        loop : true,
    });

    const startHoverScale= props.isHover ? "scale(1)" : "scale(1)";
    const endHoverScale= props.isHover ? "scale(1.2)" : "scale(1)";
    const startHoverColor = props.isHover ? "white" : "#2F6DE5";
    const endHoverColor = props.isHover ? "#2F6DE5" : "white";
    const animateHover = useSpring({
        from: {transform : startHoverScale, color : startHoverColor},
        to: { transform : endHoverScale, color : endHoverColor},
        config: { duration: 800 },
        // reset: true,
        loop : false,
    });

    // dzfinition de styles multiple pour avoir la couleur blanche au départ pour le texte
    var componentStyle = Object.assign({}, 
        animateHover
        );

// affichage du composant
return (
    <div onClick={onButtonClick} className={styles.container}>
        <animated.div  className={styles.cvLink} style={animateHover}>
            Consulter <FontAwesomeIcon icon={faFilePdf} style={{height : "25px"}} /> mon CV
        </animated.div>
        <animated.div className={styles.circle}  style={animateCircle} >
        </animated.div>
        
    </div>
  );
};

export default Circle;