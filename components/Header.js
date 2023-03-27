import styles from '../styles/Header.module.css';
import { Nav } from "react-bootstrap";

import { useEffect } from 'react';
import { useRef } from 'react';

function Header(props) {
  // on utilise une référence pour récupérerer la hauteur du cimposant
  const ref = useRef();

  // variable d'affichage des items du menu contenant les liens
  const menuItems = props.dataHeader.map(elt=>{
    return (<a key = {elt.name} className={styles.item} href={`#${elt.name}`} >
        {elt.title}
      </a>
      )
  })

  // initialisation : on renvoie la hauteur du composant au parent via la props getHeight
  useEffect(() => {
    props.getHeight(ref.current.scrollHeight, "Header");
  }, [])

  // affichage du composant
  return (
    <Nav ref={ref} className={styles.container}>
    <h3 className={styles.name}>Portfolio Nicolas Grometto</h3>
        <div className={styles.menu} >
          <div className={styles.items}>{menuItems}</div><div className={styles.bar} style={{width: props.bar}}></div>
        </div>
  </Nav>
  );
}

export default Header;