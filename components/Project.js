import styles from '../styles/Project.module.css';

import TextHover from './TextHover';

import Image from 'next/image'


import {useRef, useState } from 'react';
import {animated, useSpring} from '@react-spring/web'
import useInView from 'react-inview-callback';


function Project(props) { 
    // on utilise une reférence pour obtenir la hauteur du composant
    const ref = useRef();

    // état pour savoir quand lancer les animations 
    const [isVisible,SetIsVisible] = useState(false);

    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération de l'image à afficher
     const image = require(`../public/${props.datasProject.image}`);
    // const image = require(`../public/MorningNews.png`);
    

    // affichage au-dessus de la photo avec les informations
    const hover = (<TextHover datasProject={props.datasProject} isVisible = {isHover} animateCard={props.datasProject.animateCard}/> )

    // animation conditionnelle si on est sous forme de carte qui se retourne ou non
    const animateBox = props.datasProject.animateCard ? useSpring({
        transform: `perspective(600px) rotateY(${isHover ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80, duration : 500},
    }) : null;

    // animation d'apparition
    function onEntry(entry) {
        SetIsVisible(true)
    }

    function onExit(entry) {
        SetIsVisible(false)
    }

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.3 // permet de déclencher quand la card commence à rentrer dans la viewport : 30%
    }

    const appearanceAnimate = useSpring({
        opacity : isVisible ? 1 : 0.1, 
        config: { duration : 2000},
    })

    useInView(ref, options, onEntry, onExit);
    

    // regroupement des styles
    var componentStyles = Object.assign({}, 
        appearanceAnimate,animateBox, 
        );



// AFFICHAGE DU COMPOSANT
return (
    <animated.div ref={ref} className={styles.container}  style = {componentStyles} 
    // <div className={styles.container} 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}>
        {!isHover &&  props.datasProject.animateCard && <Image src = {image } 
                                                                className={styles.image}
                                                                layout = "fill"
                                                                // onTouchStart={this.handleTouchStart}
                                                            />
        }
         {!props.datasProject.animateCard && <Image src = {image } 
                                                                className={styles.image}
                                                                layout = "fill"
                                                                // onTouchStart={this.handleTouchStart}
                                                            />
        }
            {isHover && hover}
     {/* </div> */}
    </animated.div> 
);
}

export default Project;