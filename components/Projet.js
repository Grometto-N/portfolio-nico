import styles from '../styles/Projet.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Tag from './Tag';

import Image from 'next/image'
import { useState } from 'react';
import image from "../public/Tex.png";

function Projet(props) { 

    const [isHover, setIsHover] = useState(false);

{/* <ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup> */}

const hover = (<div className={styles.text}> 
    {/* Titre */}
    <h2>Titre</h2>
    <p>   etgezthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </p>
    {/*  */}
    <p className={styles.trait}>Technologies</p>
    <div className={styles.tagContainer}> <Tag text={"HTML"}/> </div>
    <p>Liens</p>
    <button>Site</button> 
</div>)

return (
    <div className={styles.container}>
        {/* <Image src = {image} 
            className={styles.image}
            height={"250px"}
            width={"250px"}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            // onTouchStart={this.handleTouchStart}
        /> */}
        {/* {isHover && hover} */}
        {hover}
    </div>
);
}

export default Projet;