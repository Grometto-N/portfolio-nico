import styles from '../styles/Project.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import TextHover from './TextHover';

import Image from 'next/image'


import { useState } from 'react';


function Project(props) { 
    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération des données sur le projet 
    // const {title, message, skills} = props.datasProject;


{/* <ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup> */}

const image = require(`../public/${props.datasProject.image}`);

const hover = (<TextHover datasProject={props.datasProject}/>)

return (
    <div className={styles.container}>
        <Image src = {image } 
            className={styles.image}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            fill
            // height={"1000px"}
            // onTouchStart={this.handleTouchStart}
        />
        {/* {isHover && hover} */}
        {hover}
    </div>
);
}

export default Project;