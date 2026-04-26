import Image from "next/image";
import NavBar from "./_component/navbar/page";
import InfoPage from "./_component/info/page";
import styles from './app.module.css'
import HomeWel from "./home/page";
import AboutPage from "./_component/about/page";
import ProjectPage from "./projects/page";
import ContactPage from "./_component/contact/page";

export default function Home() {
  return (
    <>
    <div id={styles.cont}>
      <NavBar />
    </div>
    <div id={styles.homecon}>
      <HomeWel />
    </div>
    <div id={styles.slidebar}>
      <p>Scroll Bar</p>
      <div></div>
    </div>
    <div id="about">
      <AboutPage />
    </div>
    <div id="projects">
      <ProjectPage />
    </div>
    <div id="contact">
      <ContactPage />
    </div>
    </>
  );
}
