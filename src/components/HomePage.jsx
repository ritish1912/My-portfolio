import React from "react";
import styles from "../styles/homePage.module.css";

function HomePage() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.poster}>
        <div className={styles.name}>HEY, I'M RITISH SRIVASTAVA</div>
        <div className={styles.info}>
          A Backend focused Web Developer building both the frontend and backend
          of Websites and Web Applications that lead to the success of the
          overall product
        </div>
        <a href="#project" className={styles.button}>
          Projects
        </a>
        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
