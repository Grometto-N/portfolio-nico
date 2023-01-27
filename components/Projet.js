import styles from '../styles/Projet.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Tag from './Tag';

import Image from 'next/image'
import Link from "next/link";

import { useState } from 'react';
import image from "../public/Tex.png";

function Projet(props) { 
    // state gérant l'affichage conditionnel
    const [isHover, setIsHover] = useState(false);

    // récupération des données sur le projet 
    const {title, message, skills} = props.datasProject;


{/* <ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup> */}

    // affichage des tags
    const displayTags = skills.map(elt=>{
        return <Tag text={elt}/> 
    })



const hover = (<div className={styles.text}> 
    {/* Titre */}
    <h2>{title}</h2>
    <p>   {message} </p>
    {/* Technologie */}
    <h4 className={styles.trait}>Compétences-Technologies</h4>
    <div className={styles.tagContainer}> {displayTags}</div>
     {/* Liens */}
    <h4 className={styles.trait}>Liens</h4>
    {/* <div><button>Site</button> <Link href={`/hashtags/${elt.title.substring(1)}`} ></Link></div>  */}
    <div ><button className={styles.btn}>Vers le site</button></div>
</div>)

return (
    <div className={styles.container}>
        <Image src = {image} 
            className={styles.image}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            // onTouchStart={this.handleTouchStart}
        />
        {/* {isHover && hover} */}
        {hover}
    </div>
);
}

export default Projet;