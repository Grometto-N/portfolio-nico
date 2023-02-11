import styles from '../styles/Header.module.css';
import { Nav } from "react-bootstrap";

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Header(props) {

  const ref = useRef();

   const menuItems = props.dataHeader.map(elt=>{
    return (<a className={styles.item} href={`#${elt.name}`} >
        {elt.title}
      </a>
      )
   })

   useEffect(() => {
   props.getHeight(ref.current.scrollHeight, "Header");
  }, [])

  
  
  return (
    <Nav ref={ref} className={styles.container}>
    <h3 className={styles.name}>Portfolio Nicolas Grometto</h3>
        <div className={styles.menu} ><div className={styles.items}>{menuItems}</div><div className={styles.bar} style={{width: props.bar}}></div></div>
  </Nav>
  );
}

export default Header;