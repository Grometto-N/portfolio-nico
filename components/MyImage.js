import styles from '../styles/MyImage.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {animated, useSpring} from '@react-spring/web'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wave} from "react-animated-text";

import Rectangle from './Rectangle';
import Bienvenue from './Bienvenue';


function MyImage(props) { 
    // On met en majuscule le mot développeur
    const devTitle = "Développeur".toLocaleUpperCase();

    // animation du cadre autour du nom-prénom
    const frameAnimate= useSpring({
            from : {y: "160%"},
            to : {y:"0%"},
            config: { duration: 2000 },
            delay:2000,
            reset: false,
            loop : false,
    });

    // animation du cadre autour du bienvenue
    const frameWelcomeAnimate= useSpring({
            from : {y: "-200%"},
            to : {y:"0%"},
            config: { duration: 2000 },
            delay:4000,
            reset: false,
            loop : false,
    });

    // animation de la div avec les rectangle et le bienvenue
    const pictureAnimate= useSpring({
            from: { scale: "0", rotate : "0.5turn"},
            to: { scale: "1", rotate : "0turn" },
            config: { duration: 2000 },
            delay:3000,
            reset: false,
            loop : false,
    });

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
        <animated.div   className={styles.frame}  style={frameAnimate} >
        </animated.div> 
        <animated.div   className={styles.frameWelcome}  style={frameWelcomeAnimate} >
        </animated.div> 
         {/* ICONES  */}
         <animated.div   className={styles.links} style={nameAnimate} >
            <a target="_blank" href="https://linkedin.com/in/nicolas-grometto-77a755246" rel="noopener noreferrer"  ><FontAwesomeIcon icon={faLinkedin} className={styles.logo}  /></a>
            <a target="_blank" href="https://github.com/Grometto-N?tab=repositories" rel="noopener noreferrer"  >  <FontAwesomeIcon icon={faGithub}  className={styles.logo}/></a>   
        </animated.div> 
        {/* DESSIN */}
        {/* <div className={styles.picture} > */}
            <Bienvenue />
        {/* </div> */}
         {/* {/* <animated.div  className={styles.picture} style={pictureAnimate} > <Rectangle 
                    top={"5vh"}
                    left = {"1vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"10vw"}
                />
                <Rectangle 
                    top={"10vh"}
                    left = {"1vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"10vw"}
                />
                <Rectangle 
                    top={"36vh"}
                    left = {"1vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"10vw"}
                />
                <Rectangle 
                    top={"41vh"}
                    left = {"1vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"10vw"}
                /> 
                 <div  className={styles.welcome}>
                     <Wave text="Bienvenue sur mon Portfolio !" 
                        effect="stretch"
                        effectChange={1.5}
                        speed = {20} 
                    /> 
                 Bienvenue sur mon Portfolio ! 
                </div> 
                 <Rectangle 
        //             top={"6vh"}
        //             left = {"15vw"}
        //             color={"#2F6DE5"}
        //             height={"3vh"}
        //             width = {"20vw"}
        //         />
        //         <Rectangle 
        //             top={"11vh"}
        //             left = {"18vw"}
        //             color={"#d3d9f3"}
        //             height={"2vh"}
        //             width = {"12vw"}
        //         />
        //         <Rectangle 
        //             top={"15vh"}
        //             left = {"20vw"}
        //             color={"white"}
        //             height={"2vh"}
        //             width = {"12vw"}
        //         />
        //         <Rectangle 
        //             top={"31vh"}
        //             left = {"15vw"}
        //             color={"#2F6DE5"}
        //             height={"3vh"}
        //             width = {"20vw"}
        //         />
        //         <Rectangle 
        //             top={"36vh"}
        //             left = {"18vw"}
        //             color={"#d3d9f3"}
        //             height={"2vh"}
        //             width = {"12vw"}
        //         />
        //         <Rectangle 
        //             top={"40vh"}
        //             left = {"20vw"}
        //             color={"white"}
        //             height={"2vh"}
        //             width = {"12vw"}
        //         />
        // </animated.div> */}
    </> 
);
}

export default MyImage;