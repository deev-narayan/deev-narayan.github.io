import Link from 'next/link'
import styles from './info.module.css'

export default function InfoPage() {
  return (
    <div id={styles.infocont}>
      <div>
        <h2>Full-Stack Developer</h2>
        <p>
          Hi. I'm Divyansh Kumar. A full-stack cross-platform
          <br />
          software/website developer in Lucknow, India.
        </p>
        <div id={styles.links}>
          <Link href="https://github.com/deev-narayan">Github</Link>
          <Link href="https://www.linkedin.com/in/divyansh-kumar-722b5224a/" >Linkdin</Link>
        </div>
        <div id="tech">
          <p>Tech Stack |</p>
        </div>
      </div>
      <div id={styles.circle}>
        <img src="./front.png" alt="img" width={450}/>
      </div>
    </div>
  )
}
