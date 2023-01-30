import styles from '../styles/Home.module.css';
import Box from './Box';

function Home() {
   const plan = [
    {name : "presentation", title : "A propos"}, 
    {name : "skills", title : "Competences"}, 
    {name : "projetsCapsule", title : "Projets de formation"},
    {name : "projetsPerso", title : "Projets autodidacte"},
  ]

  // affichage
  const display = plan.map(elt =>{
    return <Box title ={elt.title} name={elt.name}/>
  })
  return (
    <div className={styles.main}>
      {/* HEADER FIXE */}
      <div className={styles.headerFixe}>
        <p>Nicolas Grometto</p>
      </div>
      {/* Header photo */}
      <div className={styles.header}>
        <p>Header</p>
      </div>
      {/* Contenu */}
      {display}
    </div>
  );
}

export default Home;
