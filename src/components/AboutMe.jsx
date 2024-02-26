import React from "react";
import styles from "../styles/aboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.heading_and_info}>
        <div className={styles.heading}>ABOUT ME</div>
        <div className={styles.info}>
          Here you will find more information about me , what I do, and my
          current skills mostly in terms of programming and technology{" "}
        </div>
      </div>
      <div className={styles.know_me_and_skills}>
        <div className={styles.know_me}></div>
        <div className={styles.skills}></div>
      </div>
    </div>
  );
}

export default AboutMe;
