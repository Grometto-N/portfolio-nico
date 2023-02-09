import styles from '../styles/MyImage.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {animated, useSpring} from '@react-spring/web'

import Image from 'next/image'

import { Wave, Random } from "react-animated-text";

// import {animated, useSpring} from '@react-spring/web'

import Rectangle from './Rectangle';

function MyImage(props) { 


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

return (
    <> 
        <Image src = {require("../public/HeaderFloute.png")} 
                className={styles.image}
            // height={"1000px"}
        />
        {/*  NOM */}
        <ReactCSSTransitionGroup transitionName="anim" className={styles.name}
       transitionAppear={true}   >
      {/* <h2>Nicolas Grometto</h2>  */}
      <Wave text="Nicolas Grometto" 
            effect="verticalFadeOut"
            effectChange={2}
            iterations={1}
            speed = {5} 
        />
    		</ReactCSSTransitionGroup>
        {/* <ReactCSSTransitionGroup transitionName="anim" 
      transitionAppear={true}>
    		<div className={styles.shape}></div>
    		</ReactCSSTransitionGroup>  */}
         <animated.div   className={styles.shape}  style={startAnimate} >
        </animated.div> 
        {/* DEV */}
        <ReactCSSTransitionGroup transitionName="anim" className={styles.dev}
      transitionAppear={true}
      transitionAppearTimeout={10000}
      transitionEnterTimeout={10000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>Développeur web junior</h2> 
    		</ReactCSSTransitionGroup>
        {/* Bienvenue */}
        {/* <ReactCSSTransitionGroup transitionName="welcome" className={styles.welcome}
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnterTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>Bienvenue sur mon Portfolio</h2>
    		</ReactCSSTransitionGroup> */}
        <div className={styles.welcome} ><Wave text="Bienvenue sur mon Portfolio" 
            effect="stretch"
            effectChange={1.5}
            iterations={2}
            speed = {20} 
        /></div>
         
    </> 
);
}

export default MyImage;