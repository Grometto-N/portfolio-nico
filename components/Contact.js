import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact(props) {
  // affichage du contenu du composant
  return (
    <div className={styles.container}>
        <div className={styles.infos}>
           {/* Mail */}
            <div className={styles.mail}>
                <p >Vous pouvez me contacter à l'adresse mail suivante :</p> 
                <p>nicolas.grometto@gmail.com</p>
                <p>{props.info}</p>
                <p>{props.essai}</p>
                </div> 
             {/* Liens  */}
            <div className={styles.links}>
                <p>Vous pouvez également me retrouver sur :</p>
                <div>
                <a target="_blank" href="https://linkedin.com/in/nicolas-grometto-77a755246" rel="noopener noreferrer" className={styles.link}  ><FontAwesomeIcon icon={faLinkedin} className={styles.logo}  /></a>
                <a target="_blank" href="https://github.com/Grometto-N?tab=repositories" rel="noopener noreferrer"  className={styles.link} >  <FontAwesomeIcon icon={faGithub}  className={styles.logo}/></a> 
                </div>
            </div>
        </div>
        <p className={styles.copyright}>© Nicolas Grometto - 2023</p>
    </div>
  )

}

export default Contact;