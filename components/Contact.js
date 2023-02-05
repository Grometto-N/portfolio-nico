import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  
  return (
    <div className={styles.container}>
        <div className={styles.infos}>
            <p className={styles.mail}>Vous pouvez me contacter à l'adresse mail suivante : <span>nicolas.grometto@gmail.com</span></p>
            <div className={styles.links}>
                <p>Vous pouvez également me retrouver sur :</p>
                <div><FontAwesomeIcon icon={faLinkedin} className={styles.logoApp} />
                <FontAwesomeIcon icon={faGithub} className={styles.logoApp} /></div>
                
            </div>
        </div>
        <p>© Nicolas Grometto - 2023</p>
    </div>
  )

}

export default Contact;