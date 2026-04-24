import Image from "next/image";
import NavBar from "./_component/navbar/page";
import InfoPage from "./_component/info/page";
import styles from './app.module.css'

export default function Home() {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <InfoPage />
    <div id={styles.slidebar}>
      <p>Slide Bar</p>
      <div></div>
    </div>
    </>
  );
}
