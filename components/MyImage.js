import styles from '../styles/MyImage.module.css';

import {animated, useSpring} from '@react-spring/web'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wave} from "react-animated-text";

import Rectangle from './Rectangle';
import Bienvenue from './Bienvenue';


function MyImage() { 

    // On met en majuscule le mot développeur
    const devTitle = "Développeur".toLocaleUpperCase();

    // animation du cadre autour du nom-prénom : translation mais avant on ne veut pas que le cadre soit visible
    const frameAnimateName= useSpring({
            from : {y: "160%"},
            to : {y:"0%"},
            config: { duration: 2000 },
            delay:1000,
    });

    const frameAppearanceName= useSpring({
        from : {opacity: 0},
        to : {opacity:1},
        delay:1000,
    });

    const frameAppearanceWelcome= useSpring({
        from : {opacity: 0},
        to : {opacity:1},
        delay:5000,
    });

    // animation du cadre autour du bienvenue
    const frameWelcomeAnimate= useSpring({
            from : {y: "-200%"},
            to : {y:"0%"},
            config: { duration: 2000 },
            delay:5000,
    });

    // const pictureAnimate= useSpring({
    //         from: { scale: "0", rotate : "0.5turn"},
    //         to: { scale: "1", rotate : "0turn" },
    //         config: { duration: 2000 },
    //         delay:3000,
    //         reset: false,
    //         loop : false,
    // });

     // regroupement des styles pour les rectangles
     var componentFrameName = Object.assign({}, 
        frameAppearanceName,frameAnimateName 
        );

    var componentFrameWelcome = Object.assign({}, 
            frameAppearanceWelcome,frameWelcomeAnimate 
    );

     // effet de transition sur le nom et prénom
     const nameAnimate = useSpring({
        from: {opacity : 0 },
        to: { opacity : 1 },
        config: { duration: 2500 },
        loop : false,
    });

// AFFICHAGE DU COMPOSANT
return (
    <> 
        <Image src = {require("../public/HeaderFloute.png")} 
                className={styles.image}
            // height={"1000px"}
        />

        {/*  PRENOM */}
        <animated.div   className={styles.firstname} style={nameAnimate} >
            <h2>Nicolas</h2> 
        </animated.div> 
        {/*  NOM */}
        <animated.div   className={styles.name} style={nameAnimate} >
            <h2>Grometto</h2>  
        </animated.div> 
        {/* DEV */}
        <animated.div   className={styles.dev} style={nameAnimate} >
            <h2>{devTitle}</h2> 
        </animated.div>
        <animated.div   className={styles.devWeb} style={nameAnimate} >
            <h2>WEB</h2>
        </animated.div>
        <animated.div   className={styles.devJR} style={nameAnimate} >
            <h2>JUNIOR</h2> 
        </animated.div>
        {/* CADRES */}
        <animated.div   className={styles.frame}  style={componentFrameName} >
        </animated.div> 
        <animated.div   className={styles.frameWelcome}  style={componentFrameWelcome} >
        </animated.div> 
         {/* ICONES  */}
         <animated.div   className={styles.links} style={nameAnimate} >
            <a target="_blank" href="https://linkedin.com/in/nicolas-grometto-77a755246" rel="noopener noreferrer"  ><FontAwesomeIcon icon={faLinkedin} className={styles.logo}  /></a>
            <a target="_blank" href="https://github.com/Grometto-N?tab=repositories" rel="noopener noreferrer"  >  <FontAwesomeIcon icon={faGithub}  className={styles.logo}/></a>   
        </animated.div> 
        {/* Message de bienvenue */}
            <Bienvenue />
    </> 
);
}

export default MyImage;