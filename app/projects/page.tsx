import Link from 'next/link';
import styles from './project.module.css'

export default function ProjectPage() {
  const projects = [
    { name: 'Project 1', link: 'https://example.com', image: './qt.png' },
    { name: 'Project 2', link: 'https://example2.com', image: './st.png' },
    { name: 'Project 3', link: 'https://example2.com', image: './rt.png' },
  ];

  return (
    <>
    <div id={styles.contain}>
      <div id={styles.design}>
        <p><b>Pro</b>jec<b>ts</b></p>
      </div>
      <div id={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} id={styles.card}>
            <img src={project.image} alt={project.name} />
            <Link href={project.link} target="_blank" rel="noopener noreferrer"><button id={styles.btn}><p>{project.name}</p></button></Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
