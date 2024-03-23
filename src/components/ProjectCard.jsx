import React from "react";
import styles from "../styles/projectCard.module.css";

function ProjectCard({ laptopImg, description, isDeployed }) {
  return (
    <div className={styles.container}>
      <div className={styles.laptop_img}>
        <img className={styles.laptop_img} src={laptopImg} alt="" />
      </div>
      <div className={styles.overview}>
        <div className={styles.p_name}>Portfolio</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttons}>
          <div className={styles.button_live}>Live</div>
          <div className={styles.button_github}>Github</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
