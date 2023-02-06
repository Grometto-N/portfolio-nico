import styles from '../styles/MyImage.module.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import Image from 'next/image'




function MyImage(props) { 


{/* <ReactCSSTransitionGroup transitionName="anim"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
    		<h2>{'TutsPlus - Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup> */}

return (
    <>
        <Image src = {require("../public/HeaderFloute.png")} 
                className={styles.image}
            // height={"1000px"}
        />
    </>
);
}

export default MyImage;