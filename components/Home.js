import styles from '../styles/Home.module.css';
import Box from './Box';
import Header from './Header';
import Head from 'next/head'

// import useSticky from "../Hooks/useSticky";

function Home() {
   const plan = [
    {name : "presentation", title : "A propos"}, 
    {name : "skills", title : "Competences"}, 
    {name : "projetsCapsule", title : "Projets de formation"},
    {name : "projetsPerso", title : "Projets autodidacte"},
  ]

  // affichage
  const display = plan.map(elt =>{
    return <Box title ={elt.title} name={elt.name} />
  })

  // const { isSticky, element } = useSticky()
  return (
    

    <div className={styles.main}>
        {/* HEADER FIXE */}
        < Header dataHeader={plan}/>
        <div className={styles.container}>
          {/* Photo */}
          <div className={styles.header}>
              <p>vdfbdfbdgbgbgfbdgx</p>
          </div>
          {/* Contenu */}
          {display}
        </div>
    </div>
  );
}

export default Home;
