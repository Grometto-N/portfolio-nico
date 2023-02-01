import styles from '../styles/Header.module.css';
import { Nav } from "react-bootstrap";

import { useState } from 'react';
import { useEffect } from 'react';

function Header(props) {

   const menuItems = props.dataHeader.map(elt=>{
    return (<div className={styles.items}><a className={styles.item} href={`#${elt.name}`} >
        {elt.title}
      </a></div>
      )
   })
  return (
    // <nav className={styles.container}>
    //     <p>Nicolas Grometto</p> <a  href="#projetsCapsule"> Nico</a>
    // </nav>
    <Nav className={styles.container}>
    <h3 >Nicolas Grometto</h3>
    <div className={styles.menu}>
        {menuItems}
        <div>efb</div>
    </div>
  </Nav>
/* <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
<div className="navbar--logo-holder">
  {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
  <h1> Stick'Me</h1>
</div>
<ul className="navbar--link">
  <li className="navbar--link-item">Home</li>
  <li className="navbar--link-item">About</li>
  <li className="navbar--link-item">Blog</li>
</ul>
</nav> */
  );
}

export default Header;