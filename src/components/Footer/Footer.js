import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Logo />
          <p className={styles.attribution}>Olgierd Krzyżaniak 2024</p>
        </div>
        <nav>
          <h2 className={styles.linkHeading}>Links</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/Resume.pdf">Résumé</Link>
            </li>
            <li>
              <Link href="https://github.com/olgierdkrzyzaniak">Github Profile</Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/olgierd-krzyzaniak/">LinkedIn Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
