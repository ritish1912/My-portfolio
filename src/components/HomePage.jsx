import React from "react";
import styles from "../styles/homePage.module.css";
import scrollgif from "../resources/scrollGif.gif";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <div className={styles.name}>HEY, I'M RITISH SRIVASTAVA</div>
        <div className={styles.info}>
          A Backend focused Web Developer building both the frontend and backend
          of Websites and Web Applications that lead to the success of the
          overall product
        </div>
        <a className={styles.button}>Projects</a>
        <div>
          <img className={styles.scrollGif} src={scrollgif} alt="scroll" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
