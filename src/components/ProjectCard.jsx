import React from "react";
import styles from "../styles/projectCard.module.css";

function ProjectCard({ laptopImg, description, isDeployed }) {
  return (
    <div className={styles.container}>
      <div className={styles.laptop_img}>
        <img src={laptopImg} alt="" />
      </div>
      <div className={styles.overview}>
        <div className={styles.p_name}></div>
        <div className={styles.description}></div>
        <div className={styles.buttons}>
          <div className={styles.button}>Live</div>
          <div className={styles.button}>Github</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
