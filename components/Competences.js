import styles from '../styles/Competences.module.css';

function Competences() {
    const langages =[
        {name : "HTML5" , url:""},
        {name : "CSS" , url:""},
        {name : "JavaScript" , url:""},
        {name : "TypeScript" , url:""},
        {name : "MongoDB" , url:""},
        {name : "Python (bases)" , url:""},
    ]

    const frameworks =[
        {name : "Node.js" , url:""},
        {name : "Next.js" , url:""},
        {name : "Express.js" , url:""},
        {name : "Expo" , url:""},
        {name : "React.js" , url:""},
        {name : "ReactNative" , url:""},
    ]

    const divers =[
        {name : "Git/GitHub" , url:""},
        {name : "VS Code" , url:""},
        {name : "LucidChart" , url:""},
        {name : "Miro" , url:""},
        {name : "Figma" , url:""},
        {name : "Trello" , url:""},
        {name : "LateX" , url:""},
    ]
    
    const displayLangages = langages.map(elt=>{
        return(<div className={styles.row} >{elt.name}</div>)
    })

    const displayFrameworks = frameworks.map(elt=>{
        return(<div className={styles.row} >{elt.name}</div>)
    })

    const displayDivers = divers.map(elt=>{
        return(<div className={styles.row} >{elt.name}</div>)
    })

return (
    <div  className={styles.container}>
        <div className={styles.field }>
            <h3>Langages et BDD</h3>
            {displayLangages}
        </div>
        <div className={styles.field }>
            <h3>Frameworks et librairies</h3>
            {displayFrameworks}
        </div>
        <div className={styles.field }>
            <h3>Divers</h3>
            {displayDivers}
        </div>
    </div>
);
}

export default Competences;