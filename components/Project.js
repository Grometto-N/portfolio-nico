import styles from '../styles/Project.module.css';

import TextHover from './TextHover';

import Image from 'next/image'


import { useState } from 'react';


function Project(props) { 
    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération des données sur le projet 
    // const {title, message, skills} = props.datasProject;


const image = require(`../public/${props.datasProject.image}`);

const hover = (<TextHover datasProject={props.datasProject} isVisible = {isHover}/>)

return (
    <div className={styles.container} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Image src = {image } 
            className={styles.image}
            fill={true}
            // onTouchStart={this.handleTouchStart}
        />
       {hover}
    </div>
);
}

export default Project;