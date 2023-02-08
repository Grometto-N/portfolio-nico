import styles from '../styles/MyImage.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { useTransition, animated } from '@react-spring/web'

import Image from 'next/image'

// import {animated, useSpring} from '@react-spring/web'


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
           
            

return (
    <>
        <Image src = {require("../public/HeaderFloute.png")} 
                className={styles.image}
            // height={"1000px"}
        />
        <ReactCSSTransitionGroup transitionName="anim" className={styles.text}
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup>
            {/* <ReactCSSTransitionGroup className={styles.text}
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
      transitionLeave={false}
        //   transitionEnterTimeout={500}
        //   transitionLeaveTimeout={300}
          >
          <h2>Texte à animer ! </h2>
        </ReactCSSTransitionGroup> */}
    </> 
);
}

export default MyImage;