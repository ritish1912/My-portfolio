import React from "react";
import styles from "../styles/homePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <div className={styles.name}>HEY, I'M RITISH SRIVASTAVA</div>
        <div className={styles.info}>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </div>
        <a className={styles.button}>Projects</a>
      </div>
    </div>
  );
}

export default HomePage;
