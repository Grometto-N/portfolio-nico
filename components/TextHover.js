import styles from '../styles/TextHover.module.css';
import { useHistory } from "react-router-dom";
import Link from "next/link";

import Tag from "./Tag"

function TextHover(props) {
    // récupération des données sur le projet 
    const {title, message, skillsFront, skillsBack} = props.datasProject;

    // affichage des tags
    const displayTagsFront = skillsFront.map(elt=>{
        return <Tag text={elt}/> 
    })

    const displayTagsBack = skillsBack.map(elt=>{
        return <Tag text={elt}/> 
    })

    // let history = useHistory();
    const handleRedirection =()=> {console.log("click")
        // url = "https://ticket-hack-perso-frontend.vercel.app/",
        // history.push(url)
    }

return (
    <div className={styles.container}> 
        {/* Titre */}
        <h2>{title}</h2>
        <p>   {message} </p>
        {/* Frontend */}
        <h4 className={styles.trait}>Front-End</h4>
        <div className={styles.tagContainer}> {displayTagsFront}</div>
        {/* Backtend */}
        <h4 className={styles.trait}>Back-End</h4>
        <div className={styles.tagContainer}> {displayTagsBack}</div>
        {/* Liens */}
        <h4 className={styles.trait}>Liens</h4>
        {/* <div><button>Site</button> <Link href={`/hashtags/${elt.title.substring(1)}`} ></Link></div>  */}
        {/* <div ><button className={styles.btn} onClick={handleRedirection()}>Vers le site</button></div> */}
        <div>
        <button className={styles.btn}>
            <a target="_blank" href="https://ticket-hack-perso-frontend.vercel.app/" rel="noopener noreferrer">
                {/* <div className={styles.link}>Vers le site</div> */}
                Vers le site
            </a>
            </button>
        </div>
</div>
);
}

export default TextHover;