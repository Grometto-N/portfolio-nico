import styles from '../styles/Tag.module.css';


function Tag(props) {

    return (
        <div className={styles.form}>
            <span style={{color:"white"}}>{props.text} </span>          
        </div>
    );

}

export default Tag;