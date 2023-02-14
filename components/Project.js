import styles from '../styles/Project.module.css';

import TextHover from './TextHover';

import Image from 'next/image'


import { useState } from 'react';


function Project(props) { 
    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération de l'image à afficher
    const image = require(`../public/${props.datasProject.image}`);

    // affichage au-dessus de la photo avec les informations
    const hover = (<TextHover datasProject={props.datasProject} isVisible = {isHover}/>)

// AFFICHAGE DU COMPOSANT
return (
    <div className={styles.container} 
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}>
            <Image src = {image } 
                className={styles.image}
                layout = "fill"
                // onTouchStart={this.handleTouchStart}
            />
            {hover}
    </div>
);
}

export default Project;