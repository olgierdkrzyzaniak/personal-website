import React from "react";
import styles from "./Home.module.css";
import CopyToClipboard from "@/components/CopyToClipboard";

async function Home() {
  const NAME = "Olgierd Krzyżaniak";
  const EMAIL = "olgierdkrzyzaniak@gmail.com";
  const CONTACT = `${NAME}\nemail: ${EMAIL}`;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Intro}>
        <p>Hi, I am Olgierd</p>
        <p>UI Engineer / Fronted Developer based in Cracow</p>
        <p>
          I do everything I can to make your web experience as pleasent as
          possible
        </p>
      </div>
      <nav>
        <ul className={styles.Navigation}>
          <li>
            <a href="#">
              Resume <span className={styles.Arrow}> → </span>
            </a>
          </li>
          <li>
            <a href="/projects">
              Projects <span className={styles.Arrow}> → </span>
            </a>
          </li>
          <li className={styles.Contact}>
            <CopyToClipboard content={CONTACT}>
              <p className={styles.FullContactButton}>Reach out</p>
              <p className={styles.Tip}>(click to copy contact detail)</p>
            </CopyToClipboard>
            <CopyToClipboard content={EMAIL}>
              <p className={styles.ContactItem}>olgierdkrzyzaniak@gmail.com</p>
            </CopyToClipboard>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
