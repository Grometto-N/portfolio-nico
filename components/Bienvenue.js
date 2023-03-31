import styles from '../styles/Bienvenue.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {animated, useSpring, useSprings} from '@react-spring/web'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wave} from "react-animated-text";

import Rectangle from './Rectangle';


function Bienvenue() { 

    // texte à animer
    const bienvenue = [...'Bienvenue sur '];
    const portfolio = [...'mon portfolio !'];

    // effet à appliquer à chaque lettre
    const animateWord = {
        from: {opacity : 0 },
        to: { opacity : 1 },
    }

    // définition de l'animation de chaque lettre
    const delaySecondPart = 2500 + bienvenue.length*150;
    const springsBienvenue = useSprings(bienvenue.length, bienvenue.map((elt, i) => ({ ...animateWord, delay: 150 * i +2500 })))
    const springsPortfolio = useSprings(portfolio.length, portfolio.map((elt, i) => ({ ...animateWord, delay: 150 * i +delaySecondPart })))

    // variables d'affichage : on coupe en deux parties en cas de retour à la ligne (sur smartphone)
    const displayStarting= springsBienvenue.map((animateLetter, i) => {
        return (
            <animated.span key={`char${i}`} style={animateLetter} className={styles.welcome}>
                    {bienvenue[i] === ' ' ? <>&nbsp;</> : bienvenue[i]} 
            </animated.span>
        )
    });

    const displayEnd= springsPortfolio.map((animateLetter, i) => {
        return (
            <animated.span key={`char${i}`} style={animateLetter} className={styles.welcome}>
                    {portfolio[i] === ' ' ? <>&nbsp;</> : portfolio[i]} 
            </animated.span>
        )
    });

// AFFICHAGE DU COMPOSANT
return (
    <div className={styles.container} > 
        <div>{displayStarting}</div> <div>{displayEnd}</div>
    </div>
);
}

export default Bienvenue;