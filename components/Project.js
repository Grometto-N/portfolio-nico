import styles from '../styles/Project.module.css';

import TextHover from './TextHover';

import Image from 'next/image'


import { useState } from 'react';
import {animated, useSpring} from '@react-spring/web'


function Project(props) { 
    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération de l'image à afficher
     const image = require(`../public/${props.datasProject.image}`);
    // const image = require(`../public/MorningNews.png`);
    

    // affichage au-dessus de la photo avec les informations
    const hover = (<TextHover datasProject={props.datasProject} isVisible = {isHover} animateCard={props.datasProject.animateCard}/> )

    const animateBox = props.datasProject.animateCard ? useSpring({
        transform: `perspective(600px) rotateY(${isHover ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80, duration : 500},
    }) : null;




// AFFICHAGE DU COMPOSANT
return (
    <animated.div  className={styles.container}  style = {animateBox} 
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