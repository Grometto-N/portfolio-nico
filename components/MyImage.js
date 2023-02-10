import styles from '../styles/MyImage.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {animated, useSpring} from '@react-spring/web'

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Wave, Random } from "react-animated-text";

// import {animated, useSpring} from '@react-spring/web'

import Rectangle from './Rectangle';

function MyImage(props) { 

const devTitle = "Développeur".toLocaleUpperCase();


{/* <ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup> */}

            // const startAnimate= useSpring({
            //     from: { transform: `scale(0)` },
            //     to: { transform: "scale(1.5)" },
            //     config: { duration: 3000 },
            //     reset: true,
            //     loop : true,
            // });

            // const transApi = useSpringRef()
           
            const startAnimate= useSpring({
              from: { transform: `translate(50%,0%)` },
              to: { transform: "translate(0%,0%)" },
              config: { duration: 1000 },
              reset: true,
              loop : false,
          });

  const frameAnimate= useSpring({
            // from: { transform: `translate(0%,200%)` },
            // to: { transform: "translate(0%,0%)" },
            from : {y: "200%"},
            to : {y:"0%"},
            config: { duration: 2000 },
            reset: false,
            loop : false,
   });

   const pictureAnimate= useSpring({
    from: { scale: "0", rotate : "0.5turn"
          },
    to: { scale: "1", rotate : "0turn" },
    config: { duration: 3000 },
    delay:2000,
    reset: false,
    loop : false,
});

return (
    <> 
        <Image src = {require("../public/HeaderFloute.png")} 
                className={styles.image}
            // height={"1000px"}
        />
        {/*  PRENOM */}
        <ReactCSSTransitionGroup 
            className={styles.firstname}
            transitionName="anim" 
            transitionAppear={true}  >
                <h2>Nicolas</h2> 
    		</ReactCSSTransitionGroup>
        {/*  NOM */}
        <ReactCSSTransitionGroup 
            className={styles.name}
            transitionName="anim" 
            transitionAppear={true}   >
                <h2>Grometto</h2> 
    		</ReactCSSTransitionGroup>
        {/* <ReactCSSTransitionGroup transitionName="anim" 
      transitionAppear={true}>
    		<div className={styles.shape}></div>
    		</ReactCSSTransitionGroup>  */}
         {/* <animated.div   className={styles.shape}  style={startAnimate} >
        </animated.div>  */}
        {/* DEV */}
        <ReactCSSTransitionGroup
            className={styles.dev}
            transitionName="anim" 
            transitionAppear={true}>
    		        <h2>{devTitle}</h2> 
    		</ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
            className={styles.devWeb}
            transitionName="anim" 
            transitionAppear={true}>
    		        <h2>WEB</h2> 
    		</ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
            className={styles.devJR}
            transitionName="anim" 
            transitionAppear={true}>
    		        <h2>JUNIOR</h2> 
    		</ReactCSSTransitionGroup>
        {/* ICONES  */}
        {/* <div className={styles.links}> */}
        <ReactCSSTransitionGroup 
        className={styles.links}
        transitionName="anim" 
        transitionAppear={true}>
                <a target="_blank" href="https://linkedin.com/in/nicolas-grometto-77a755246" rel="noopener noreferrer"  ><FontAwesomeIcon icon={faLinkedin} className={styles.logo}  /></a>
                <a target="_blank" href="https://github.com/Grometto-N?tab=repositories" rel="noopener noreferrer"  >  <FontAwesomeIcon icon={faGithub}  className={styles.logo}/></a> 
                {/* </div> */}
                </ReactCSSTransitionGroup>
        {/* CADRE */}
        <animated.div   className={styles.frame}  style={frameAnimate} >
        </animated.div> 
        {/* DESSIN */}
        <animated.div  className={styles.picture} style={pictureAnimate} >
              {/* LEFT */}
              <Rectangle 
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
                {/*  BIENVENUE */}
                <div  className={styles.welcome}>
                    <Wave text="Bienvenue sur mon Portfolio" 
                        effect="stretch"
                        effectChange={1.5}
                        speed = {20} 
                    />
                </div>
                {/* RIGHT */}
                <Rectangle 
                    top={"6vh"}
                    left = {"15vw"}
                    color={"#2F6DE5"}
                    height={"3vh"}
                    width = {"20vw"}
                />
                <Rectangle 
                    top={"11vh"}
                    left = {"18vw"}
                    color={"#d3d9f3"}
                    height={"2vh"}
                    width = {"12vw"}
                />
                <Rectangle 
                    top={"15vh"}
                    left = {"20vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"12vw"}
                />
                <Rectangle 
                    top={"31vh"}
                    left = {"15vw"}
                    color={"#2F6DE5"}
                    height={"3vh"}
                    width = {"20vw"}
                />
                <Rectangle 
                    top={"36vh"}
                    left = {"18vw"}
                    color={"#d3d9f3"}
                    height={"2vh"}
                    width = {"12vw"}
                />
                <Rectangle 
                    top={"40vh"}
                    left = {"20vw"}
                    color={"white"}
                    height={"2vh"}
                    width = {"12vw"}
                />
        </animated.div>
        
        {/* Bienvenue */}
        {/* <ReactCSSTransitionGroup transitionName="welcome" className={styles.welcome}
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnterTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>Bienvenue sur mon Portfolio</h2>
    		</ReactCSSTransitionGroup> */}
        {/* <div className={styles.welcome} ></div> */}
         
    </> 
);
}

export default MyImage;